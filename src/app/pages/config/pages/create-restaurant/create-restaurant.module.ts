import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRestaurantPageRoutingModule } from './create-restaurant-routing.module';

import { CreateRestaurantPage } from './create-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateRestaurantPageRoutingModule
  ],
  declarations: [CreateRestaurantPage]
})
export class CreateRestaurantPageModule { }
