import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AdalService } from 'ng2-adal/core';

@Injectable()
export class AuthguardService implements CanActivate, CanActivateChild {

  constructor(private adalService: AdalService) { }

  canActivate = () => this.adalService.userInfo.isAuthenticated
  canActivateChild = () => this.adalService.userInfo.isAuthenticated
}