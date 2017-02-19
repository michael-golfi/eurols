import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretService } from './secret.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SecretService]
})
export class SharedModule { }
