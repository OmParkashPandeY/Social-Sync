import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PartialsModule } from '../../partials/partials.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PicsStackComponent } from './pics-stack/pics-stack.component';
import { PicsSettingsComponent } from './pics-settings/pics-settings.component';

// prettier-ignore
@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    DashboardComponent,
    AllPostsComponent,
    UserProfileComponent,
    AboutUsComponent,
    PicsStackComponent,
    PicsSettingsComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PartialsModule,
    MatDialogModule
  ]
})
export class LayoutsModule { }
