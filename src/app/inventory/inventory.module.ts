import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule,
    JsonpModule,
    RouterModule,
    SharedModule
  ],
  declarations: [InventoryComponent],
  providers: [],
})
export class SearchModule { }
