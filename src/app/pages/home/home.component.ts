import { Component, OnInit } from '@angular/core';
import {Item} from '../../../types/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  items: Array<Item>;
  constructor() { }


  ngOnInit(): void {
    this.items = [
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},
      {title: '进制转换', type: '开发类', describe: '实现不同进制数值之间的转换，支持小数的进制转换。', path: '../../../assets/imgs/demo.jpg'},

    ];
  }

}
