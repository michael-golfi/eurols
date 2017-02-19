import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/core';

import { SecretService } from './shared/secret.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  routes = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', name: 'Inventory', icon: 'assignment' },
    { path: '/transaction', name: 'Transactions', icon: 'credit_card' },
    { path: '/customer', name: 'Customers', icon: 'people' },
  ];

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }

  constructor(private adalService: AdalService, private secretService: SecretService) {
    this.adalService.init(this.secretService.adalConfig);
  }

}