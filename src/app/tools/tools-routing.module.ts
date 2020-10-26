import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolsComponent} from './tools.component';
import {ScaleComponent} from './scale/scale.component';


const routes: Routes = [
  {
    path: 'tools',
    component: ToolsComponent,
    children: [
      {
        path: 'scale', component: ScaleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
