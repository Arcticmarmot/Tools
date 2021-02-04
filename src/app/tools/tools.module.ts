import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScaleModule} from './tool-modules/scale/scale.module';
import {QrCodeModule} from './tool-modules/qr-code/qr-code.module';
import {TimestampModule} from './tool-modules/timestamp/timestamp.module';


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
    TimestampModule,
  ]
})
export class ToolsModule { }
