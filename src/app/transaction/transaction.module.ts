import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MaterialModule } from '@angular/material';
import { TransactionComponent } from './transaction.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }
