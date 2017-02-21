import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedComponent } from './authorized/authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DetailsComponent } from './details/details.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { AuthguardService } from './shared/authguard.service';

const routes: Routes = [
  { path: 'login', component: FrontpageComponent },
  {
    path: '', component: AuthorizedComponent, canActivateChild: [AuthguardService], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'inventory/:serialNumber', component: DetailsComponent }
    ]
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
