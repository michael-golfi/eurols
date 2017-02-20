import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './inventory/inventory.module';
import { DetailsModule } from './details/details.module';
import { SharedModule } from './shared/shared.module';

import { AdalModule, AdalService } from 'ng2-adal/core';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,

    // Declare modules needed.
    DashboardModule,
    SearchModule,
    DetailsModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [AdalService],
  bootstrap: [AppComponent]
})

export class AppModule {

}

