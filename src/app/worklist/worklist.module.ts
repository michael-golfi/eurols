import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MaterialModule } from '@angular/material';
import { WorklistComponent } from './worklist.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    NgxDatatableModule,
  ],
  declarations: [WorklistComponent]
})
export class WorklistModule { }
