import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRestaurantPage } from './create-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRestaurantPageRoutingModule {}
