import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimestampComponent } from './timestamp.component';
import {TitleModule} from '../templates/title/title.module';
import {TimestampRoutingModule} from './timestamp-routing.module';



@NgModule({
  declarations: [TimestampComponent],
  imports: [
    CommonModule,
    TitleModule,
    TimestampRoutingModule
  ]
})
export class TimestampModule { }
