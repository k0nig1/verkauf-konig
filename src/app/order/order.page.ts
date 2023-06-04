import { Component, ViewChild, ElementRef } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss']
})

export class OrderPage {

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
    this.qrScanner.captureImage(this.fileinput);
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


