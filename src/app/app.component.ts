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
  isSideNavOpen = (window.innerWidth > this.maxMediumWidth);
  sideNavMode = (window.innerWidth > this.maxMediumWidth) ? 'side' : 'over'

  constructor(private adalService: AdalService, private secretService: SecretService) {
    this.adalService.init(this.secretService.adalConfig);
  }

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
  }
}