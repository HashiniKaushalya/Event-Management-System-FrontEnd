import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthLoginInfo} from '../AuthService/login-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ssingupinfo} from '../info/ssignup-info';
import {Verifycode} from '../info/verify-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
   })

};
@Injectable({
  providedIn: 'root'
})


export class UserAuthService {


  private  ssignup = 'http://localhost:8080/student/register';
  private  sverify = 'http://localhost:8080/student/verify';
  private  slogin = 'http://localhost:8080/student/login';
  private  sloguot = 'http://localhost:8080/student/logout';

  constructor(private http: HttpClient) { }

  studentlogin(logininfo: AuthLoginInfo): Observable<string> {
    return this.http.post<string>(this.slogin, logininfo, httpOptions);
  }

  studentsignup(signup: Ssingupinfo): Observable<string> {
    // console.log(signup.firstname+"it is in service layer");
    return this.http.post<string>(this.ssignup, signup, httpOptions);
  }

  studentverify(veri: Verifycode): Observable<string> {
    return this.http.post<string>(this.sverify, veri);
  }

  studentloguot(logouttoken: AuthLoginInfo): Observable<string> {
    return this.http.post<string>(this.sloguot,  httpOptions);
  }



}
