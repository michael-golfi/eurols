import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  routes = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
    { path: '/inventory', name: 'Inventory', icon: 'assignment' },
    { path: '/transaction', name: 'Transactions', icon: 'credit_card' },
    { path: '/customer', name: 'Customers', icon: 'people' },    
  ];
}
