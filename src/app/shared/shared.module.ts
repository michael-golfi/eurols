import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretService } from './secret.service';
import { ForkliftService } from './forklift.service';
import { AuthguardService } from './authguard.service';

import { DirectionsMapDirective } from './directives/gmap-directions.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectionsMapDirective],
  providers: [SecretService, ForkliftService, AuthguardService]
})
export class SharedModule { }
