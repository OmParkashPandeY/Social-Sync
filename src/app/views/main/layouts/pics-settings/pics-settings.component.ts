import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { imageCategoryList } from 'src/app/shared/constants/constants';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-pics-settings',
     templateUrl: './pics-settings.component.html',
     styleUrls: ['./pics-settings.component.scss']
})
export class PicsSettingsComponent implements OnInit {
     public allImageCategories: any = [];
     // prettier-ignore
     constructor(
        private _dialog: MatDialog,
        private _overlay: Overlay,
        private _router: Router,
        private _location:Location,
        private _storageService: StorageService,
      ){
      let savedCategories =  this._storageService.getPictureCategories();
          if(savedCategories){
            this.allImageCategories = savedCategories;
          }else{
            this.allImageCategories = imageCategoryList;
            this._storageService.setPictureCategories(this.allImageCategories);
          }
    }

     ngOnInit(): void {}

     public goToBack() {
          this._location.back();
     }

     public toggleCategory(category: any) {
          this.allImageCategories.forEach((element: any) => {
               if (element.id == category.id) {
                    element.isActive = !element.isActive;
               }
          });
          this._storageService.setPictureCategories(this.allImageCategories);
     }
}
