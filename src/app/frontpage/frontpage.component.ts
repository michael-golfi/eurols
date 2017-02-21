import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  loggedIn: boolean
  constructor(private adalService: AdalService, private router: Router) {
    this.loggedIn = adalService.userInfo.isAuthenticated;
  }

  ngOnInit() {
    if (this.adalService.userInfo.isAuthenticated)
      this.router.navigate(['dashboard'])
  }

  login = () => this.adalService.login();
}
