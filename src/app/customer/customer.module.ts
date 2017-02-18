import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MaterialModule } from '@angular/material';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }