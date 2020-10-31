import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {QRConfig} from "../../../types/data";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.less']
})
export class QrCodeComponent implements OnInit {
  formData = this.fb.group({
    data: ['https://smalltools.club'],
    width: [512],
    colorDark: ['#000000'],
    colorLignt: ['#FFFFFF']
  });
  qrConfig: QRConfig;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.qrConfig = this.formData.value;
  }
}
