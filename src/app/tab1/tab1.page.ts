import { Component } from '@angular/core';
import { RestaurantMenu } from '../models/restaurant-menu';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    var content = document.querySelector('ion-content');
    if (content) {
      content.scrollEvents = true;
      content.addEventListener('ionScrollStart', () => console.log('scroll start'));
      content.addEventListener('ionScroll', (ev: Event) => console.log('scroll'));
      content.addEventListener('ionScrollEnd', () => console.log('scroll end'));
    }
  }
}
