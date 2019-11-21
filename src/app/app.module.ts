import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CategoryComponent } from './category/category.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { RequestedEventsComponent } from './requested-events/requested-events.component';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminaprovelComponent } from './adminaprovel/adminaprovel.component';
import { VerifyComponent } from './verify/verify.component';
// import { VerifycodeComponent } from './verifycode/verifycode.component';
import { CodetodoComponent } from './codetodo/codetodo.component';
import { AdmincodetodoComponent } from './admincodetodo/admincodetodo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSignUpComponent,
    AdminSignUpComponent,
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    CategoryComponent,
    CreateEventComponent,
    EventsComponent,
    RequestedEventsComponent,
    AdminloginComponent,
    AdminaprovelComponent,
    VerifyComponent,
    // VerifycodeComponent,
    CodetodoComponent,
    AdmincodetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
