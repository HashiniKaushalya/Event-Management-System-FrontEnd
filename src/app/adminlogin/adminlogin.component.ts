import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../AuthService/login-info';
import {UserAuthService} from '../servies/user-auth.service';
import {AdminAuthService} from '../servies/admin-auth.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {AuthenticationService} from '../AuthService/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
form: any = {};

  loginInfo: AuthLoginInfo;
  isSignedUp = false;
  isLoginFailed= false;
  errorMessage = '';
  profile: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  constructor(private authenticationService: AuthenticationService, private ulogin: AdminAuthService, private router: Router ,
              private route: ActivatedRoute) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit() {
  }
  onSubmit() {

    this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password,

    );
    this.ulogin.adminlogin(this.loginInfo).subscribe(
      data => {

        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        console.log(data);

        this.profile = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.profile.token);


        this.isSignedUp = true;
        this.isLoginFailed = false;
        this.router.navigate(['home/adminhome']);

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
