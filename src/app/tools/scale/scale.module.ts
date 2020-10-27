import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from './scale.component';
import {ScaleRoutingModule} from './scale-routing.module';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ScaleComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ScaleRoutingModule,
  ]
})
export class ScaleModule { }
