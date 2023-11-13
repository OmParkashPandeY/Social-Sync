import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';

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
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule {}
