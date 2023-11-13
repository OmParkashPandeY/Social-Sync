import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { Page404Component } from './views/page-404/page-404.component';

const routes: Routes = [
     {
          component: LoginComponent,
          path: 'login'
     },
     {
          component: SignupComponent,
          path: 'signup'
     },
     {
          path: '',
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
