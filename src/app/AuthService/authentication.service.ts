import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {User} from '../model/user';
import {AuthLoginInfo} from './login-info';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  constructor(private http: HttpClient, ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credentials: AuthLoginInfo): Promise<any>  {
    // console.log("enter to authser.ts"+username+ password);
    return new Promise<any>((resolve, reject) => {
      return this.http.post(this.loginUrl, credentials, httpOptions);
      // this.afAuth.auth.signInWithEmailAndPassword( username, password)
  //       .pipe(
  //         user => {
  //           // console.log("return from fire base"+user);
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //           this.currentUserSubject.next(user);
  //           return user;
  //           resolve(user);
  //         });
  //           // err => {
  //           //  reject(err);
  //           // console.log('error from fire base'+err)
  //         // });
  //   )
  //
  // })
  }); }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
