import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPage } from './config.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  },
  {
    path: 'create-restaurant',
    loadChildren: () => import('./pages/create-restaurant/create-restaurant.module').then( m => m.CreateRestaurantPageModule)
  },
  {
    path: 'read-restaurant',
    loadChildren: () => import('./pages/read-restaurant/read-restaurant.module').then( m => m.ReadRestaurantPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPageRoutingModule { }
