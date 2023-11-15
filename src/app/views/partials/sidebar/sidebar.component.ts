import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';

@Component({
     selector: 'app-sidebar',
     templateUrl: './sidebar.component.html',
     styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
     public menus: any = [
          {
               icon: 'fas fa-home',
               path: 'home',
               name: 'Home',
               label: 'Home',
               alias: 'home',
               active: true,
               display: true,
               url: '/home'
          },
          {
               icon: 'fas fa-user-alt',
               path: 'user-profile',
               name: 'Your Profile',
               label: 'Your Profile',
               alias: 'user-profile',
               active: true,
               display: true,
               url: '/user-profile'
          },
          {
               icon: 'fas fa-th-large',
               path: 'posts',
               name: 'All Posts',
               label: 'All Posts',
               active: true,
               alias: 'posts',
               display: true,
               url: '/posts'
          },
          {
               icon: 'fas fa-image',
               path: 'pics-stack',
               name: 'Pics Stack',
               label: 'Pics Stack',
               actice: true,
               alias: 'pics-stack',
               display: true,
               url: '/pics-stack'
          },
          {
               icon: 'fas fa-dashboard',
               path: 'dashboard',
               name: 'Dashboard',
               label: 'Dashboard',
               display: true,
               alias: 'dashboard',
               active: true,
               url: '/dashboard'
          },
          {
               icon: 'fas fa-address-card',
               path: 'about-us',
               name: 'About Us',
               label: 'About Us',
               display: true,
               active: true,
               alias: 'about-us',
               url: '/about-us'
          }
     ];

     // prettier-ignore
     constructor(
      private _router: Router,
      private _dialog: MatDialog,
      ) {
          this._router.events.subscribe((event) => {
               if (event instanceof NavigationEnd) {
                 this.handleCurrentUrl();
               }
             });
      }

     ngOnInit(): void {
          this.handleCurrentUrl();
     }

     public navigateToNextScreen(path: any) {
          this._router.navigateByUrl('/' + path);
     }

     public handleCurrentUrl() {
          let alias = '';
          if (this._router.url == '/home') {
               alias = 'home';
          } else if (this._router.url == '/user-profile') {
               alias = 'user-profile';
          } else if (this._router.url == '/posts') {
               alias = 'posts';
          } else if (this._router.url == '/pics-stack') {
               alias = 'pics-stack';
          } else if (this._router.url == '/dashboard') {
               alias = 'dashboard';
          } else if (this._router.url == '/about-us') {
               alias = 'about-us';
          }
          this.handleActiveMenu(alias);
     }

     public handleActiveMenu(alias) {
          this.menus.map((menu) => {
               if (menu.alias == alias) {
                    menu.active = true;
               } else {
                    menu.active = false;
               }
          });
     }

     public handleMenuNavigation(menu: any) {
          this.handleActiveMenu(menu.alias);
          this._router.navigateByUrl(menu.url);
     }
}
