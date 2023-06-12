import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerModalComponent } from 'src/app/components/qr-scanner-modal/qr-scanner-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async showQRScannerModal() {
    const modal = await this.modalCtrl.create({
      component: QrScannerModalComponent
    });
    modal.present();
  }

}
