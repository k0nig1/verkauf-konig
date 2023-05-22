import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantMenuComponent } from './restaurant-menu.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [RestaurantMenuComponent],
  exports: [RestaurantMenuComponent]
})
export class RestaurantMenuModule { }
