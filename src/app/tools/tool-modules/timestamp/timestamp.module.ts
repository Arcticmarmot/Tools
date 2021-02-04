import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampComponent } from './timestamp.component';
import {TimestampRoutingModule} from './timestamp-routing.module';
import {ToolTemplateModule} from '../../templates/tool-template/tool-template.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [TimestampComponent],
  imports: [
    CommonModule,
    TimestampRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ToolTemplateModule,
  ]
})
export class TimestampModule { }
