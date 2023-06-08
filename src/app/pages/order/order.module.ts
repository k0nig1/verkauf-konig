import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page';

import { RestaurantModalModule } from 'src/app/components/restaurant-modal/restaurant-modal.module';

import { OrderPageRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RestaurantModalModule,
    OrderPageRoutingModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule { }
