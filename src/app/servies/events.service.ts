import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from '../AuthService/login-info';
import {Observable} from 'rxjs';
import {Events} from '../info/event-info';
import {Aprovetheevents} from '../info/aprove-info';
// profile: any;
// this.profile = ;
// this.token = this.profile.token;
const httpOptions = {

  headers: new HttpHeaders({
    // 'x-token': JSON.parse(localStorage.getItem('currentUser')).token ,
'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private  create = 'http://localhost:8080/event/create';
  private  all = 'http://localhost:8080/event/all';
  private  approvel = 'http://localhost:8080/event/status';
  // private  sloguot = 'http://localhost:8080/student/logout';
  profile: any;

  token: string;
  constructor(private http: HttpClient) { }




  createevent(createinfo: Events): Observable<string> {
console.log(createinfo,httpOptions, JSON.parse(localStorage.getItem('currentUser')));
    return this.http.post<string>(this.create,  createinfo, httpOptions);
  }


  allevents(): Observable<any> {
    return this.http.get(this.all, httpOptions);
  }



  approveEvent(createinfo: Aprovetheevents): Observable<string> {
    return this.http.post<string>(this.approvel,  createinfo, httpOptions);
  }





}
