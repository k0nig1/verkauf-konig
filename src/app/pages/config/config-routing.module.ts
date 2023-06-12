import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPage } from './config.page';

import { RestaurantPageRoutingModule } from '../restaurant/restaurant/restaurant-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  },
  {
    path: 'restaurant',
    loadChildren: () => import('../restaurant/restaurant/restaurant.module').then(m => m.RestaurantPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPageRoutingModule { }
