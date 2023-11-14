import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { PicsStackComponent } from './pics-stack/pics-stack.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PicsSettingsComponent } from './pics-settings/pics-settings.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutsComponent,
          children: [
               {
                    path: '',
                    component: HomeComponent
               },
               {
                    path: 'home',
                    component: HomeComponent
               },
               {
                    path: 'user-profile',
                    component: UserProfileComponent
               },
               {
                    path: 'posts',
                    component: AllPostsComponent
               },
               {
                    path: 'dashboard',
                    component: DashboardComponent
               },
               {
                    path: 'pics-stack',
                    component: PicsStackComponent
               },
               {
                    path: 'pics-settings',
                    component: PicsSettingsComponent
               },
               {
                    path: 'about-us',
                    component: AboutUsComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule {}
