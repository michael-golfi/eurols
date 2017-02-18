import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isConnected: Observable<boolean>;

  constructor() {
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
  }

  validateSearch = (el: HTMLInputElement) => el.value = el.value.substring(0, 7);
  limitNumbers = (event: KeyboardEvent) => event.charCode >= 48 && event.charCode <= 57;
}
