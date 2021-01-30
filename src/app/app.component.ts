import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TOOLS} from '../constants/constant';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  animations: [
    trigger('collapse', [
      state('open', style({
        'margin-left': '80px',
        color: 'red',
      })),
      state('close', style({
      })),
      transition('*=>*', [
        animate('0ms 50ms ease-out')
      ]),
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isBlank = true;
  isOpened: boolean;
  tools = TOOLS;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBlank = event.url === '/';
      }
    });

  }

  ngAfterViewInit(): void {
    this.sidenav.openedChange.subscribe(value => {
      this.isOpened = value;
    });
  }
  routeHome() {
    this.router.navigate(['/']);
  }

  collapse() {
    return this.isOpened ? 'open' : 'close';
  }
}
