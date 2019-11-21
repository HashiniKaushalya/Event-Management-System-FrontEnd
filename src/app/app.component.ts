import { Component } from '@angular/core';
import {AuthenticationService} from './AuthService/authentication.service';
import {Router} from '@angular/router';
import {User} from './model/user';
import {EventsService} from './servies/events.service';
import {UserAuthService} from './servies/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeCoolian';
  showEventForm:boolean =false;
  currentUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private log:UserAuthService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  showEventFormFun(){
    this.showEventForm=!this.showEventForm;
  }

  ulogout(){
    this.log.studentloguot(JSON.parse(localStorage.getItem('currentUser')).token).subscribe(data=>{
      this.router.navigate(['/home']);
      console.log("hi log out");
    })
    this.authenticationService.logout();

  }
}
