import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {
  maxMediumWidth = 991;
  isSideNavOpen = (window.innerWidth > this.maxMediumWidth);
  sideNavMode = (window.innerWidth > this.maxMediumWidth) ? 'side' : 'over'

  routes = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', name: 'Inventory', icon: 'assignment' },
  ];

  constructor(private adalService: AdalService, router: Router) {
    if (!adalService.userInfo.isAuthenticated)
      router.navigate(['login'])
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(size => {
        this.isSideNavOpen = (window.innerWidth > this.maxMediumWidth)
        this.sideNavMode = (window.innerWidth > this.maxMediumWidth) ? 'side' : 'over'
      });
  }
}
