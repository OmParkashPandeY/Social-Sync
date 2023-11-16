import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { unplashImages } from 'src/app/shared/constants/constants';
import { ApiService } from 'src/app/shared/services/api.service';
import { NewPostComponent } from 'src/app/views/popups/new-post/new-post.component';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     public unplashImages: any = {};
     public searchForm: FormGroup;

     // prettier-ignore
     constructor(
      private _dialog: MatDialog,
      private _overlay: Overlay,
      private _apiService:ApiService
     ){
          this.unplashImages=unplashImages;
    }
     ngOnInit(): void {
          // this.getUserProfileDetails();
          this.createSearchForm();
     }

     public createNewPostPopup() {
          let payload = {
               userName: 'Om PandeY',
               page: 'HomeComponent'
          };
          this._dialog
               .open(NewPostComponent, {
                    enterAnimationDuration: '300ms',
                    exitAnimationDuration: '300ms',
                    data: payload,
                    disableClose: true,
                    panelClass: 'new-post-popup',
                    scrollStrategy: this._overlay.scrollStrategies.block()
               })
               .afterClosed()
               .subscribe((response) => {});
     }

     public getUserProfileDetails() {
          let payload: any = {
               count: 10,
               orientation: 'landscape',
               query: 'beautiful girl',
               perPage: 20,
               language: 'en'
          };
          this._apiService.getUnplashImages(payload).subscribe({
               next: (res) => {
                    console.log(res);
               },
               error: (error) => {
                    console.log(error);
               }
          });
     }

     public createSearchForm() {
          this.searchForm = new FormGroup({
               searchField: new FormControl('mountain')
          });
     }

     public search() {
          console.log(this.searchForm.value);
     }
}
