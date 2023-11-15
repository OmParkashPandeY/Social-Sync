import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-landing-page',
     templateUrl: './landing-page.component.html',
     styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
     // prettier-ignore
     constructor(
      private _storageServie: StorageService,
      private _router: Router
     ) {}

     ngOnInit(): void {}

     @HostListener('window:scroll', ['$event'])
     onWindowScroll() {
          let element = document.querySelector('.stickey-header') as HTMLElement;
          if (window.scrollY > element.clientHeight) {
               element.classList.remove('transparent-background');
               element.classList.add('color-background');
          } else {
               element.classList.add('transparent-background');
               element.classList.remove('color-background');
          }
     }

     public login() {
          this._storageServie.setUserLoggedIn(true);
          this._router.navigateByUrl('/');
     }
}
