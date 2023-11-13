import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    DashboardComponent,
    AllPostsComponent,
    UserProfileComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
