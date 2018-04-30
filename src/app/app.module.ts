import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { CoreComponent } from './dashboard/components/core/core.component';
import { LoginComponent } from './dashboard/components/login/login.component';
import {AppRoutingModule} from './app-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
//etc
import { ToastrModule } from 'ngx-toastr';
//services
import {AuthService} from './service/Authservice' ;
import {AuthModule} from './auth/authenticate.module';
import { RegistrationComponent } from './dashboard/components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,LayoutModule,BoxModule,AppRoutingModule,HttpModule,ToastrModule.forRoot(),AuthModule
  ],
   providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
