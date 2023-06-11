import { Component, ViewChild, ElementRef } from '@angular/core';
import { QrScannerService } from '../../services/qr-scanner.service';
import { RestaurantModalComponent } from 'src/app/components/restaurant-modal/restaurant-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss']
})
/**
 * OrderPage
 * @class
 * @classdesc This is a view to facilitate ordering 
 */
export class OrderPage {

  @ViewChild('video', { static: false }) video!: ElementRef;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput!: ElementRef;

  qrScanner: QrScannerService;
  private _scanResult = "";
  private _scanActive = false;
  private modalCtrl: ModalController;

  /**
   * OrderPage constructor
   * @param qrScanner 
   */
  constructor(qrScanner: QrScannerService, modalCtrl: ModalController) {
    this.qrScanner = qrScanner;
    this.modalCtrl = modalCtrl;
  }

  /**
   * ngAfterViewInit()
   */
  ngAfterViewInit() {
    this.qrScanner.canvasElement = this.canvas.nativeElement;
    this.qrScanner.canvasContext = this.qrScanner.canvasElement.getContext('2d');
    this.qrScanner.videoElement = this.video.nativeElement;
  }

  async showRestaurantModal() {
    const modal = await this.modalCtrl.create({
      component: RestaurantModalComponent
    });
    modal.present();
  }

  /**
   * Methods below facilitate QR scanning
   */

  /**
   * scanResult()
   */
  public get scanResult() {
    return this.qrScanner.scanResult;
  }

  /**
   * scanActive()
   */
  public get scanActive() {
    return this.qrScanner.scanActive;
  }

  /**
   * CaptureImage
   * 
   */
  captureImage() {
    this.qrScanner.captureImage(this.fileinput);
  }

  /**
   * startScan()
   */
  startScan() {
    this.qrScanner.startScan();
  }

  /**
   * stopScan()
   */
  stopScan() {
    this.qrScanner.stopScan();
  }

  /**
   * resetScan()
   */
  reset() {
    this.qrScanner.reset();
  }

  /**
   * handleFile()
   * @param Event ev 
   */
  handleFile(ev: Event) {
    this.qrScanner.handleFile(ev);
  }
}


