import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from '../AuthService/login-info';
import {Observable} from 'rxjs';
import {Asingupinfo} from '../info/asinup-info';
import {Verifycode} from '../info/verify-info';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AdminAuthService {


  private  asignup = 'http://localhost:8080/admin/register';
  private  averify = 'http://localhost:8080/admin/verify';
  private  alogin = 'http://localhost:8080/admin/login';
  private  aloguot = 'http://localhost:8080/admin/logout';

  constructor(private http: HttpClient) { }

  adminlogin(logininfo: AuthLoginInfo): Observable<string> {
    return this.http.post<string>(this.alogin, logininfo, httpOptions);
  }

  adminsignup(signup: Asingupinfo): Observable<string> {
    return this.http.post<string>(this.asignup, signup, httpOptions);
  }

  adminverify(veri: Verifycode): Observable<string> {
    return this.http.post<string>(this.averify, veri, httpOptions);
  }

  adminloguot(logouttoken: AuthLoginInfo): Observable<string> {
    return this.http.post<string>(this.aloguot, logouttoken, httpOptions);
  }






}
