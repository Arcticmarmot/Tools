import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScaleComponent} from './scale.component';

const routes: Routes = [
  {
    path: '',
    component: ScaleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleRoutingModule { }
