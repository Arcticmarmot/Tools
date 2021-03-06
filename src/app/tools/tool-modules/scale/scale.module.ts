import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from './scale.component';
import {ScaleRoutingModule} from './scale-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from 'ngx-clipboard';
import {ToolTemplateModule} from '../../templates/tool-template/tool-template.module';
@NgModule({
  declarations: [ScaleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ClipboardModule,
    ScaleRoutingModule,
    MatRadioModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    ToolTemplateModule,
  ]
})
export class ScaleModule { }
