import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InventoryComponent } from './inventory.component';

import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    SharedModule,

    MdlModule
  ],
  declarations: [InventoryComponent],
  providers: [],
})
export class SearchModule { }
