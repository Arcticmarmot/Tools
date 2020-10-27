import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.less']
})
export class ScaleComponent implements OnInit {
  formData = this.fb.group({
    number: [],
    scale: []
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formData.controls.number.value);
    console.log(this.formData.controls.scale.value);
  }
}
