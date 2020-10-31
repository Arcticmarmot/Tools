import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {QRConfig} from "../../../types/data";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.less']
})
export class QrCodeComponent implements OnInit {
  formData = this.fb.group({
    data: ['https://smalltools.club', Validators.required],
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

  saveQRCode() {
    const qrCode = document.getElementById('qr-code-wrap');
    const canvas = qrCode.getElementsByTagName('canvas')[0];
    const saveImage = qrCode.getElementsByTagName('a')[0];
    saveImage.href = canvas.toDataURL('image/jpeg');
  }
}
