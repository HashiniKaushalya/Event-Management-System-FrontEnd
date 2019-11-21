import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../AuthService/login-info';
import {AuthenticationService} from '../AuthService/authentication.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {AdminAuthService} from '../servies/admin-auth.service';
import {UserAuthService} from '../servies/user-auth.service';
import {Ssingupinfo} from '../info/ssignup-info';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private loginInfo: AuthLoginInfo;
  form: any = {};
  loginInfo: AuthLoginInfo;
  isSignedUp = false;
  isLoginFailed = false;
  errorMessage = '';
  profile: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  constructor(private authenticationService: AuthenticationService, private ulogin: UserAuthService,private router: Router ,
              private route: ActivatedRoute) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    }

  ngOnInit() {
  }
  onSubmit() {
// console.log(this.form);
this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password,

    );
this.ulogin.studentlogin(this.loginInfo).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);

        this.profile = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.profile.token);
        this.isSignedUp = true;
        this.isLoginFailed = false;

        this.router.navigate(['home/userhome']);

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

    // console.log("hi");
    // this.loginInfo = new AuthLoginInfo(
    //   this.form.username,
    //   this.form.password);
    //
    // this.authenticationService.login(this.loginInfo).then(
    //   data => {
    //     localStorage.setItem('currentUser', JSON.stringify(data));
    //     this.currentUserSubject.next(data);
    //     // this.reloadPage();
    //   },
    //   error => {
    //     console.log(error);
    //
    //   }
    // );
    // document.getElementById("loginin").style.display="none";
  }
}
