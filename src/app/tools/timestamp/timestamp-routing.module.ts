import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimestampComponent} from './timestamp.component';

const routes: Routes = [
  {
    path: '',
    component: TimestampComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimestampRoutingModule { }
