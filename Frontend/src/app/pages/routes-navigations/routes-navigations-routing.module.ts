import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesNavigationsPage } from './routes-navigations.page';

const routes: Routes = [
  {
    path: '',
    component: RoutesNavigationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesNavigationsPageRoutingModule {}
