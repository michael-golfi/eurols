import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './inventory/inventory.module';
import { DetailsModule } from './details/details.module';
import { SharedModule } from './shared/shared.module';

import { AdalModule, AdalService } from 'ng2-adal/core';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AuthorizedComponent } from './authorized/authorized.component';

import { MdlModule } from 'angular2-mdl';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AuthorizedComponent
  ],
  imports: [
    MaterialModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,

    MdlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDI-tYIz68dgH1cbgMRIvgXpVPCoGLvRE8'
    }),

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

