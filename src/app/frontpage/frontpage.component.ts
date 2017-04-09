import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AdalService } from 'ng2-adal/core';
import { AgmCoreModule, SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  zoom: number = 16;
  lat: number = 45.4917439;
  lng: number = -73.7528644;
  
  constructor(private adalService: AdalService, private router: Router) {

  }

  ngOnInit() {
    if (this.adalService.userInfo.isAuthenticated)
      this.router.navigate(['dashboard'])
  }

  login = () => this.adalService.login()

  // getDirections = () =>
  // https://www.google.ca/maps/dir//Euro+L+S+Inc,+2750+Rue+Halpern,+Saint-Laurent,+QC+H4S+1R6/@45.4913941,-73.7541197,17z/data=!4m15!1m6!3m5!1s0x4cc93d398a419563:0x4ec0400e32fb2a9c!2sEuro+L+S+Inc!8m2!3d45.4917439!4d-73.7528644!4m7!1m0!1m5!1m1!1s0x4cc93d398a419563:0x4ec0400e32fb2a9c!2m2!1d-73.7528644!2d45.4917439
}
