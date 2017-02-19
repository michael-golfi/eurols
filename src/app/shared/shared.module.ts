import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretService } from './secret.service';
import { ForkliftService } from './forklift.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SecretService, ForkliftService]
})
export class SharedModule { }
