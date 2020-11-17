import { Component, OnInit } from '@angular/core';
import {Item} from '../../../types/data';
import {FormBuilder} from '@angular/forms';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  searchItem: string;
  items: Array<Item> = [
    {title: '代码在线运行', type: '开发类', describe: '各种语言代码在线运行。',
      path: '../../../assets/imgs/demo.jpg', name: 'code-runner'},
    {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。',
      path: '../../../assets/imgs/demo.jpg', name: 'scale'},
    {title: '二维码生成', type: '开发类', describe: '实现各种大小的二维码生成，可以插入图片。',
      path: '../../../assets/imgs/demo.jpg', name: 'qr-code'},
  ];
  formData = this.fb.group({
    searchContent: [],
  });
  constructor(private fb: FormBuilder, private route: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.route.navigate([this.searchItem]);
  }
  setSearchItem(name: string) {
    this.searchItem = 'tools/' + name;
  }
}
