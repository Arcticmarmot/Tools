import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from './scale.component';
import {ScaleRoutingModule} from './scale-routing.module';


@NgModule({
  declarations: [ScaleComponent],
  imports: [
    CommonModule,
    ScaleRoutingModule
  ]
})
export class ScaleModule { }
