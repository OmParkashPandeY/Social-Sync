import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
     // prettier-ignore
     constructor(
      private _router: Router
      ) {

      }

     ngOnInit(): void {}

     public navigateToNextScreen(path: any) {
          this._router.navigateByUrl(path);
     }
}
