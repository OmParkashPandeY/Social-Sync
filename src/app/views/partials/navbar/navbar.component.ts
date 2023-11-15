import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
     // prettier-ignore
     constructor(
      private _router: Router,
      private _storageServie: StorageService,
      ) {

      }

     ngOnInit(): void {}

     public navigateToNextScreen(path: any) {
          this._router.navigateByUrl(path);
     }

     public logout() {
          this._storageServie.clearAll();
          this._router.navigateByUrl('/syncme');
     }
}
