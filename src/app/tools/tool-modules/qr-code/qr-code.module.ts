import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrCodeRoutingModule } from './qr-code-routing.module';
import { QrCodeComponent } from './qr-code.component';
import {QRCodeModule} from 'angularx-qrcode';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {ToolTemplateModule} from '../../templates/tool-template/tool-template.module';


@NgModule({
  declarations: [QrCodeComponent],
    imports: [
        CommonModule,
        QrCodeRoutingModule,
        QRCodeModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatButtonModule,
        ToolTemplateModule
    ]
})
export class QrCodeModule { }
