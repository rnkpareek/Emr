import { Component, OnInit } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthModule} from '../../../auth/authenticate.module';
import {AuthService} from '../../../service/Authservice'
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth_verified: boolean;
  constructor( private router:Router,private toastr: ToastrService, private authService:AuthService) { }

  ngOnInit() {
   /* this.auth_verified = this.authService.useJwtHelper();

    //const auth_verified = this.authService.useJwtHelper();
    console.log('auth_verified:::::' + this.auth_verified);
    if (this.auth_verified) {
      console.log('moved to dashboard page.....')
      this.router.navigateByUrl('/dashboard');
    }*/
  }
  login(event, email, password) {
    if(email && password != null ){
      console.log("not null")
      this.router.navigateByUrl('/dashboard');
     /* event.preventDefault();
      this.dataservice.login(email, password)
        .subscribe(response => {
          if(response.save === true){
            localStorage.apiToken=response.token
            this.router.navigate(['/dashboard']);
            this.showSuccess();
          }
          else if(response.save === false){
            this.showError();
            console.log("password or user not matching 11")
          }
          }, this.handleError);*/
    }
    else{
      console.log("password or user not matching")
    }
  }

  handleError(error) {
    console.log(error.status);
  }
 /* showSuccess() {
    this.toastr.success('Welcome admin!', 'Success!');
  }
  showError(){
    this.toastr.error('password or user not matching!', 'Error!');
  }*/

}


