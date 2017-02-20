import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretService } from './secret.service';
import { ForkliftService } from './forklift.service';

import { AuthguardService } from './authguard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SecretService, ForkliftService, AuthguardService]
})
export class SharedModule { }
