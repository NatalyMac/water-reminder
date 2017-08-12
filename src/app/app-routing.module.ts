import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinkDetailComponent } from './drink-detail-component/drink-detail.component';
import { DrinksComponent } from './drinks-component/drinks.component';
import { DashboardComponent } from './dasboard-component/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: DrinkDetailComponent },
  { path: 'drinks',     component: DrinksComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

