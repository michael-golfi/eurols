import { Injectable } from '@angular/core';

import { environment } from "app/../environments/environment";

export interface AuthConfig {
  tenant: string;
  clientId: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
}

@Injectable()
export class SecretService {
  public get adalConfig(): AuthConfig {
    return {
      tenant: 'eurols.onmicrosoft.com',
      clientId: '8e624608-1635-4d40-87e8-b1c3c196d2bf',
      //redirectUri: window.location.origin,
      //postLogoutRedirectUri: window.location.origin
      redirectUri: environment.redirectUrl,
      postLogoutRedirectUri: environment.redirectUrl
    };
  }
}