import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScaleModule} from "./scale/scale.module";
import {QrCodeModule} from "./qr-code/qr-code.module";
import { TitleComponent } from './templates/title/title.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScaleModule,
    QrCodeModule
  ],
  exports: [
    ScaleModule,
    QrCodeModule,
  ]
})
export class ToolsModule { }
