import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../servies/user-auth.service';
import {Ssingupinfo} from '../info/ssignup-info';
import {Verifycode} from '../info/verify-info';

@Component({
  selector: 'app-codetodo',
  templateUrl: './codetodo.component.html',
  styleUrls: ['./codetodo.component.css']
})
export class CodetodoComponent implements OnInit {
  form: any = {};
  signupInfo: Verifycode;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  successMessage = '';
  constructor(private usersignup: UserAuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new Verifycode(
      this.form.email,
      this.form.code,
    );
console.log(this.signupInfo.code+"before send");
    this.usersignup.studentverify(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        // this.isSignUpFailed = false;
        this.successMessage = " your email to verified";
      },
      error => {
        console.log(error.error+"this error from codetodo");
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
