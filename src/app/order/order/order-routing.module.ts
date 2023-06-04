import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
  },
  {
    path: 'order',
    loadChildren: () => import('./order.module').then(m => m.OrderPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPageRoutingModule { }
