import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../servies/user-auth.service';
import {Ssingupinfo} from '../info/ssignup-info';
// import {asingupinfo, Ssingupinfo, ssingupinfo} from '../info/ssignup-info';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
form: any = {};
  signupInfo: Ssingupinfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  successMessage = '';
  constructor(private usersignup: UserAuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    // console.log(this.form);

    this.signupInfo = new Ssingupinfo(
      this.form.firstname,
      this.form.lastname,
      this.form.email,
      this.form.password,
      this.form.indexno ,
      this.form.faculty,
      this.form.contacno,


    );

    this.usersignup.studentsignup(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.successMessage = "check your email to verify";
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        this.isSignUpFailed = true;
      }
    );
  }
}
