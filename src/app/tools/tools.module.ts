import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScaleModule} from "./scale/scale.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScaleModule,
  ],
  exports: [
    ScaleModule
  ]
})
export class ToolsModule { }
