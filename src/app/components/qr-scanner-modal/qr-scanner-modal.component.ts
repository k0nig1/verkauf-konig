import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qr-scanner-modal',
  templateUrl: './qr-scanner-modal.component.html',
  styleUrls: ['./qr-scanner-modal.component.scss'],
})
export class QrScannerModalComponent implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    this.dismissModal();
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}