import { Injectable } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  video!: ElementRef;
  canvas!: ElementRef;
  fileinput!: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult: any;
  loading: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform
  ) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PWA!');
      // E.g. hide the scan functionality!
    }

    this.loading = async () => {
      this.loading = await loadingCtrl.create({
        message: "Loading. Please wait",
        duration: 3000 // 3 seconds
      });
    }
  }

  // Helper functions
  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      position: 'top',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    });
    toast.present();
  }

  reset() {
    this.scanResult = "";
  }

  stopScan() {
    this.scanActive = false;
    const stream = this.videoElement.srcObject;
    let tracks = [];
    tracks = stream.getTracks();
    // tracks.forEach(function (track) {
    //   track.stop();
    // });
    for (let track of tracks) {
      track.stop();
    }

    this.videoElement.srcObject = null;
  }

  async startScan() {
    // Not working on iOS standalone mode before iOS 11
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.setAttribute('autoplay', '');
    this.videoElement.setAttribute('muted', '');

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  captureImage(el: ElementRef) {
    el.nativeElement.click();
  }

  /* 
  *  Earlier versions of iOS (11>) does not handle 'getUserMedia()' well
  *  so this is a fallback
  */
  handleFile(event: Event) {
    const element = event.target as HTMLInputElement;
    let files: FileList | null = element.files;
    let file: File | null;
    if (files == null) {
      console.log("iOS no files");
      return;
    }
    else
      file = files.item(0);

    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        this.scanResult = code.data;
        this.showQrToast();
      }
    };

    img.src = URL.createObjectURL(file!);
  }
}
