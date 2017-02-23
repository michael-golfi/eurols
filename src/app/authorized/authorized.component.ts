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
  isConnected: Observable<boolean>;
  query: string;

  routes = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', name: 'Inventory', icon: 'assignment' },
  ];

  constructor(private adalService: AdalService, private router: Router) {
    if (!adalService.userInfo.isAuthenticated)
      router.navigate(['login'])
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
  }

  public login = () => this.adalService.login();
  public logout = () => this.adalService.logOut();
  public search = (query: string) => this.router.navigate(['/inventory'], {
    queryParams: { "q": query }
  });
}
