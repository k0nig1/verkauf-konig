import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantMenuItemsListComponent } from './restaurant-menu-items-list.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [RestaurantMenuItemsListComponent],
  exports: [RestaurantMenuItemsListComponent]
})
export class RestaurantMenuItemsListModule { }
