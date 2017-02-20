import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isConnected: Observable<boolean>;
  loggedIn: boolean = this.adalService.userInfo.isAuthenticated;
  query: string;

  constructor(private adalService: AdalService, private router: Router) {
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));

    this.loggedIn = this.adalService.userInfo.isAuthenticated;
  }

  public login = () => this.adalService.login();
  public logout = () => this.adalService.logOut();
  public search = (query: string) => this.router.navigate(['/inventory'], {
    queryParams: { "q": query }
  });

  limitNumbers = (event: KeyboardEvent) => event.charCode >= 48 && event.charCode <= 57;
}
