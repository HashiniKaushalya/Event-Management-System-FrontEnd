import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {UserSignUpComponent} from './user-sign-up/user-sign-up.component';
import {AdminSignUpComponent} from './admin-sign-up/admin-sign-up.component';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {EventsComponent} from './events/events.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {RequestedEventsComponent} from './requested-events/requested-events.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {AdminaprovelComponent} from './adminaprovel/adminaprovel.component';
import {VerifyComponent} from './verify/verify.component';


const routes: Routes = [
  // after check this should be un comment
  { path: ' ', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/verify',
    component: VerifyComponent
  },
  {
    path: 'usignup',
    component: UserSignUpComponent
  },
  {
    path: 'asignup',
    component: AdminSignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home/adminhome',
    component: AdminHomeComponent
  },
  {
    path: 'home/adminhome/requested-event',
    component: RequestedEventsComponent
  },
  {
    path: 'home/adminhome/events',
    component: EventsComponent
  },
  {
    path: 'home/adminhome/requested-event/aprovel',
    component: AdminaprovelComponent
  }
,
  {
    path: 'home/userhome',
    component: UserHomeComponent
  },
  {
    path: 'home/userhome/eventcategory',
    component: CategoryComponent
  },
  {
    path: 'home/userhome/eventcategory/createevent',
    component: CreateEventComponent
  },
  {
    path: 'home/userhome/events',
    component: EventsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
