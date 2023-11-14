import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { PicsStackComponent } from './pics-stack/pics-stack.component';

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
                    path: 'pics-stack',
                    component: PicsStackComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule {}
