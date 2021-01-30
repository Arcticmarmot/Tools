import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolTemplateComponent} from "./tool-template.component";



@NgModule({
  declarations: [ToolTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ToolTemplateComponent
  ]
})
export class ToolTemplateModule { }
