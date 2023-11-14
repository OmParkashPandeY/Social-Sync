import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
     selector: 'app-sidebar',
     templateUrl: './sidebar.component.html',
     styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
     public sidebarButtons: any = [
          {
               icon: 'fas fa-home',
               path: 'home',
               name: 'Home',
               label: 'Home'
          },
          {
               icon: 'fas fa-image',
               path: 'pics-stack',
               name: 'Pics Stack',
               label: 'Pics Stack'
          }
     ];
     // prettier-ignore
     constructor(
      private _router: Router
      ) {

      }

     ngOnInit(): void {}

     public navigateToNextScreen(path: any) {
          this._router.navigateByUrl('/' + path);
     }
}
