import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScaleModule} from "./scale/scale.module";
import {QrCodeModule} from "./qr-code/qr-code.module";
import {TimestampModule} from "./timestamp/timestamp.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScaleModule,
    QrCodeModule,
    TimestampModule
  ],
  exports: [
    ScaleModule,
    QrCodeModule,
    TimestampModule
  ]
})
export class ToolsModule { }
