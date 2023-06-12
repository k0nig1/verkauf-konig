import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadRestaurantPage } from './read-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ReadRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadRestaurantPageRoutingModule { }
