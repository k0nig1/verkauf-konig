import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadRestaurantPageRoutingModule } from './read-restaurant-routing.module';

import { ReadRestaurantPage } from './read-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadRestaurantPageRoutingModule
  ],
  declarations: [ReadRestaurantPage]
})
export class ReadRestaurantPageModule {}
