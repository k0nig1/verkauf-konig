import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../components/explore-container/explore-container.module';
import { RestaurantMenuItemsListModule } from '../components/restaurant-menu-items-list/restaurant-menu-items-list.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    RestaurantMenuItemsListModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
