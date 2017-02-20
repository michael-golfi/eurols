import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AdalService } from 'ng2-adal/core';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private adalService: AdalService) { }

  canActivate() {
    return this.adalService.userInfo.isAuthenticated;
  }
}