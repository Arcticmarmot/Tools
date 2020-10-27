import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from './scale.component';
import {ScaleRoutingModule} from './scale-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ScaleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ScaleRoutingModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class ScaleModule { }
