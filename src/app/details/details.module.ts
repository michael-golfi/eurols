import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { DetailsComponent } from './details.component';
import { DefaultPipe } from './details.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxDatatableModule
  ],
  declarations: [DetailsComponent, DefaultPipe]
})
export class DetailsModule { }
