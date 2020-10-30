import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrCodeRoutingModule } from './qr-code-routing.module';
import { QrCodeComponent } from './qr-code.component';
import {TitleModule} from "../templates/title/title.module";
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  declarations: [QrCodeComponent],
  imports: [
    CommonModule,
    QrCodeRoutingModule,
    TitleModule,
    QRCodeModule
  ]
})
export class QrCodeModule { }
