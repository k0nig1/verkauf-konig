import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RestaurantModalComponent } from './restaurant-modal.component';

@NgModule({
  declarations: [RestaurantModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantModalComponent]
})
export class RestaurantModalModule { }
