import { Component, OnInit } from '@angular/core';
import {Verifycode} from '../info/verify-info';
import {UserAuthService} from '../servies/user-auth.service';
import {AdminAuthService} from '../servies/admin-auth.service';

@Component({
  selector: 'app-admincodetodo',
  templateUrl: './admincodetodo.component.html',
  styleUrls: ['./admincodetodo.component.css']
})
export class AdmincodetodoComponent implements OnInit {
  form: any = {};
  signupInfo: Verifycode;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  successMessage = '';
  constructor(private usersignup: AdminAuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new Verifycode(

      this.form.email,
      this.form.code,



    );

    this.usersignup.adminverify(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.successMessage = " your email to verified";
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
