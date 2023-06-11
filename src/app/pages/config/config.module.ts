import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';

import { ConfigPage } from './config.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConfigPageRoutingModule
  ],
  declarations: [ConfigPage]
})
export class ConfigPageModule { }
