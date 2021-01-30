import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-template',
  templateUrl: './tool-template.component.html',
  styleUrls: ['./tool-template.component.less']
})
export class ToolTemplateComponent implements OnInit {
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
