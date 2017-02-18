import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WorklistComponent } from './worklist/worklist.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  
  // Visible Routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: SearchComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'customer', component: WorklistComponent },

  // Non-Visible
  { path: 'forklift/:serialNumber', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { 
  
}
