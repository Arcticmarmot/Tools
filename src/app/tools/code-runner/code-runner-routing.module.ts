import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodeRunnerComponent} from './code-runner.component';

const routes: Routes = [
  {
    path: '',
    component: CodeRunnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRunnerRoutingModule { }
