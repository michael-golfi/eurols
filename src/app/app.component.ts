import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';

import { SecretService } from './shared/secret.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  maxMediumWidth = 991;
  isSideNavOpen = true;
  sideNavMode = "side"

  routes = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', name: 'Inventory', icon: 'assignment' },
  ];

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }

  constructor(private adalService: AdalService, private secretService: SecretService) {
    this.adalService.init(this.secretService.adalConfig);
    Observable.fromEvent(window, 'resize')
      .debounceTime(200)
      .subscribe(size => {
        this.isSideNavOpen = (window.innerWidth > this.maxMediumWidth)
        this.sideNavMode = (window.innerWidth > this.maxMediumWidth) ? 'side' : 'over'
      })
  }
}