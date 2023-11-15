import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { Page404Component } from './views/page-404/page-404.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AuthGuard } from './shared/guards/auth-guards';

const routes: Routes = [
     {
          path: 'login',
          component: LoginComponent
     },
     {
          path: 'signup',
          component: SignupComponent
     },
     {
          path: 'syncme',
          component: LandingPageComponent
     },
     {
          path: '',
          canActivate: [AuthGuard],
          loadChildren: () => import('./views/main/layouts/layouts.module').then((m) => m.LayoutsModule)
     },
     {
          path: '**',
          component: Page404Component
     }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule {}
