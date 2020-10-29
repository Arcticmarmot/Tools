import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NToX, XToN} from '../../../constants/scale/fn';

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
  isComputed = false;
  result: Array<string>;
  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const num = this.formData.controls.number.value;
    const scale = this.formData.controls.scale.value;
    if (this.validate(num, scale)) {
      const [transNum, transScale] = this.transfer(num, scale);
      this.result = this.compute(transNum, transScale);
      this.isComputed = true;
    } else {
      this.snackBar.open('数值与进制不匹配', 'OK', {duration: 2000});
    }
  }
  validate(num: string, scale: string): boolean {
    if (!num) {
      return false;
    }
    switch (scale) {
      case '2':
        const re2 = /[01]+/;
        return num === num.match(re2)[0];
      case '8':
        const re8 = /[0-7]+/;
        return num === num.match(re8)[0];
      case '10':
        const rex = /[0-9]+/;
        return num === num.match(rex)[0];
      case '16':
        const re0x = /[0-9abcdef]+/;
        return num === num.match(re0x)[0];
      default:
        return false;
    }
  }
  transfer(num, scale): Array<number> {
    if (num.startsWith('0')) {
      this.transfer(num.replace('0', ''), scale);
    }
    num = num.split('');
    for (const i in num) {
      if (num[i].charCodeAt(0) - 48 > 10) {
        num[i] = num[i].charCodeAt(0) - 87;
      } else {
        num[i] = num[i].charCodeAt(0) - 48;
      }
    }
    return [num, Number(scale)];
  }
  compute(num, scale): Array<string> {
    console.log(num, scale);
    let X = num;
    if (scale !== 10) {
      X = NToX(num, scale);
    }
    return XToN(X);
  }
}
