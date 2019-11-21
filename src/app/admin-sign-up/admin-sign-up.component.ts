import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../servies/user-auth.service';
import {AdminAuthService} from '../servies/admin-auth.service';
import {Ssingupinfo} from '../info/ssignup-info';
import {Asingupinfo} from '../info/asinup-info';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {
form: any = {};
  signupInfo: Asingupinfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  successMessage = '';
  constructor(private adminsignup: AdminAuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new Asingupinfo(
      this.form.firstname,
      this.form.lastname,
      this.form.email,
      this.form.password,
      // this.form.indexno ,
      this.form.faculty,
      this.form.contacno,


    );

    this.adminsignup.adminsignup(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.successMessage = "check your email to verify";
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
