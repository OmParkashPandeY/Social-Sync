import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartialsModule { }
