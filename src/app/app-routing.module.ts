import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DetailsComponent } from './details/details.component';

import { AuthguardService } from './shared/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  
  // Visible Routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthguardService] },

  // Non-Visible
  { path: 'forklift/:serialNumber', component: DetailsComponent, canActivate: [AuthguardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
