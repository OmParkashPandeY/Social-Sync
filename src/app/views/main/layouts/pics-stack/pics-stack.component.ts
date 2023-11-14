import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { imageCategoryList } from 'src/app/shared/constants/constants';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-pics-stack',
     templateUrl: './pics-stack.component.html',
     styleUrls: ['./pics-stack.component.scss']
})
export class PicsStackComponent implements OnInit {
     public picsList: any = [];
     public allImageCategories: any = [];
     // prettier-ignore
     constructor(
        private _dialog: MatDialog,
        private _overlay: Overlay,
        private _router: Router,
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

     ngOnInit(): void {
          this.getAllImages();
     }

     public getAllImages() {
          this.allImageCategories.forEach((element: any) => {
               if (element.isActive) {
                    this.fetchImageWithAsyncMethod(element);
               }
          });
     }
     //----------------------------------------------------------------------

     public async fetchImageWithAsyncMethod(element: any) {
          let width = 1920;
          let height = 1080;
          let randomURL = `https://source.unsplash.com/${width}x${height}/?` + element.name;
          let response = await fetch(randomURL);
          let imageURL = response.url;
          element['imageURL'] = imageURL;
          this.picsList.push(element);
     }

     //----------------------------------------------------------------------

     public async downloadImage(downloadURL: any) {
          const fileName = new Date().getTime();
          const aTag = document.createElement('a');
          aTag.href = await this.getImageFromURL(downloadURL);
          aTag.download = `Social-Sync-${fileName}.png`;
          document.body.appendChild(aTag);
          aTag.click();
          document.body.removeChild(aTag);
     }

     //----------------------------------------------------------------------

     public async getImageFromURL(url: any) {
          return fetch(url)
               .then((response) => {
                    return response.blob();
               })
               .then((blob) => {
                    return URL.createObjectURL(blob);
               });
     }

     //----------------------------------------------------------------------

     public navigateToNextScreen(path: any) {
          this._router.navigateByUrl('/' + path);
     }
}
