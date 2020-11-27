import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeRunnerRoutingModule } from './code-runner-routing.module';
import { CodeRunnerComponent } from './code-runner.component';
import {TitleModule} from '../templates/title/title.module';

@NgModule({
  declarations: [CodeRunnerComponent],
  imports: [
    CommonModule,
    CodeRunnerRoutingModule,
    TitleModule
  ]
})
export class CodeRunnerModule { }
