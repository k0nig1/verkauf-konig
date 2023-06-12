import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerService } from 'src/app/services/qr-scanner.service';

@Component({
  selector: 'app-qr-scanner-modal',
  templateUrl: './qr-scanner-modal.component.html',
  styleUrls: ['./qr-scanner-modal.component.scss'],
})
export class QrScannerModalComponent implements OnInit {

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

  ngOnInit(): void { }
  /**
   * ngAfterViewInit()
   */
  ngAfterViewInit() {
    this.qrScanner.canvasElement = this.canvas.nativeElement;
    this.qrScanner.canvasContext = this.qrScanner.canvasElement.getContext('2d');
    this.qrScanner.videoElement = this.video.nativeElement;
    this.startScan();
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
    this.modalCtrl.dismiss();
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
