import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesNavigationsPageRoutingModule } from './routes-navigations-routing.module';

import { RoutesNavigationsPage } from './routes-navigations.page';
import { SharedModule } from "../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesNavigationsPageRoutingModule,
    SharedModule
  ],
  declarations: [RoutesNavigationsPage]
})
export class RoutesNavigationsPageModule {}
