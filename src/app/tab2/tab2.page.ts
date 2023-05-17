import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { QrScannerService } from '../services/qr-scanner.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput!: ElementRef;

  qrScanner: QrScannerService;
  private _scanResult = "";
  private _scanActive = false;
  // public gets for above variables
  public get scanResult() {
    return this.qrScanner.scanResult;
  }

  public get scanActive() {
    return this.qrScanner.scanActive;
  }

  constructor(qrScanner: QrScannerService) {
    this.qrScanner = qrScanner;
  }

  ngAfterViewInit() {
    this.qrScanner.canvasElement = this.canvas.nativeElement;
    this.qrScanner.canvasContext = this.qrScanner.canvasElement.getContext('2d');
    this.qrScanner.videoElement = this.video.nativeElement;
  }
  captureImage() {
    this.qrScanner.captureImage();
  }

  startScan() {
    this.qrScanner.startScan();
  }

  stopScan() {
    this.qrScanner.stopScan();
  }

  reset() {
    this.qrScanner.reset();
  }

  handleFile(ev: Event) {
    this.qrScanner.handleFile(ev);
  }
}


