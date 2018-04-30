import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dashboard/components/login/login.component';

import {AuthService} from './service/Authservice';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './dashboard/components/registration/registration.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'registration',component:RegistrationComponent}
  /*{path:'dashboard',component:CoreComponent,canActivate:[AuthService]}*/

  /*{ path: 'admin', loadChildren: 'app/dashboard/admin/admin.module#AdminModule',data: { preload: true } }*/


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
