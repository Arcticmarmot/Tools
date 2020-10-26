import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScaleModule} from './scale/scale.module';
import { ToolsComponent } from './tools.component';
import {ToolsRoutingModule} from "./tools-routing.module";



@NgModule({
  declarations: [ToolsComponent],
  imports: [
    CommonModule,
    ScaleModule,
    ToolsRoutingModule
  ],
  exports: [
    ScaleModule
  ]
})
export class ToolsModule { }
