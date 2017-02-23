import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { DetailsComponent } from './details.component';
import { DefaultPipe } from './details.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    NgxDatatableModule
  ],
  declarations: [DetailsComponent, DefaultPipe]
})
export class DetailsModule { }
