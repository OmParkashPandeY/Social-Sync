import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { Page404Component } from './views/page-404/page-404.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

// prettier-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Page404Component,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
