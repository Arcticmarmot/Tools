import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClipboardService, IClipboardResponse} from 'ngx-clipboard';
import {ScaleNumber} from '../../../constants/scale/classes/ScaleNumber';
import {ComputedResult} from '../../../constants/scale/types/data';

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
  result: ComputedResult;
  constructor(private fb: FormBuilder,
              public snackBar: MatSnackBar,
              private clipboardService: ClipboardService) { }

  ngOnInit(): void {
    this.formData.valueChanges.subscribe(value => {
      this.isComputed = false;
    });
    this.handleClipboardResponse();
  }

  onSubmit() {
    const num = this.formData.controls.number.value;
    const scale = this.formData.controls.scale.value;
    if (this.validate(num, scale)) {
      const [transNum, transScale] = this.transfer(num, scale);
      const sc = new ScaleNumber(transNum, transScale);
      this.result = sc.result;
      this.isComputed = true;
    } else {
      this.snackBar.open('数值与进制不匹配', 'OK', {duration: 2000});
      this.isComputed = false;
    }
  }
  validate(num: string, scale: string): boolean {
    if (!num) {
      return false;
    }
    const re2 = /[01 ]+[.]?[01 ]*/;
    const re8 = /[0-7 ]+[.]?[0-7 ]*/;
    const rex = /[0-9 ]+[.]?[0-9 ]*/;
    const re0x = /[0-9abcdefABCDEF ]+[.]?[0-9abcdefABCDEF ]*/;
    let group;
    switch (scale) {
      case '2':
        group = num.match(re2);
        break;
      case '8':
        group = num.match(re8);
        break;
      case '10':
        group = num.match(rex);
        break;
      case '16':
        group = num.match(re0x);
        break;
      default:
        return false;
    }
    return group && num === group[0];
  }
  transfer(num, scale) {
    while (num.startsWith('0')) {
      num = num.replace('0', '');
    }
    while (num.indexOf(' ') !== -1) {
      num = num.replace(' ', '');
    }
    return [num, Number(scale)];
  }

  copyResult(e) {
    this.clipboardService.copy(e.target.innerText.split(': ')[1]);
  }

  private handleClipboardResponse() {
    this.clipboardService.copyResponse$.subscribe((res: IClipboardResponse) => {
      if (res.isSuccess) {
        this.snackBar.open('复制成功', 'OK', {duration: 2000});
      } else {
        this.snackBar.open('复制失败', 'OK', {duration: 2000});
      }
    });
  }
}
