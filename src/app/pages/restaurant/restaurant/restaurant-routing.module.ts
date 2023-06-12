import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  },
  {
    path: 'create',
    loadChildren: () => import('../create-restaurant/create-restaurant.module').then(m => m.CreateRestaurantPageModule)
  },
  {
    path: 'read',
    loadChildren: () => import('../read-restaurant/read-restaurant.module').then(m => m.ReadRestaurantPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../detail/detail.module').then(m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPageRoutingModule { }
