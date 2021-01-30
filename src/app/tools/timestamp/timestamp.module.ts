import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampComponent } from './timestamp.component';
import {TimestampRoutingModule} from './timestamp-routing.module';
import {ToolTemplateModule} from "../templates/tool-template/tool-template.module";



@NgModule({
  declarations: [TimestampComponent],
  imports: [
    CommonModule,
    TimestampRoutingModule,
    ToolTemplateModule
  ]
})
export class TimestampModule { }
