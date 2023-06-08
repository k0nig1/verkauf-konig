import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.scss'],
})
export class RestaurantModalComponent implements OnInit {

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";

  constructor(private modal: ModalController) { }

  ngOnInit() { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
