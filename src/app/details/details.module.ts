import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { DetailsComponent } from './details.component';
import { DefaultPipe } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DetailsComponent, DefaultPipe]
})
export class DetailsModule { }
