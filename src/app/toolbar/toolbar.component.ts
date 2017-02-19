import { Component, OnInit } from '@angular/core';
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
  loggedIn: boolean = false;

  constructor(private adalService: AdalService) {
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));

    this.loggedIn = this.adalService.userInfo.isAuthenticated;
  }

  public login = () => this.adalService.login();
  public logout = () => this.adalService.logOut();

  validateSearch = (el: HTMLInputElement) => el.value = el.value.substring(0, 7);
  limitNumbers = (event: KeyboardEvent) => event.charCode >= 48 && event.charCode <= 57;
}
