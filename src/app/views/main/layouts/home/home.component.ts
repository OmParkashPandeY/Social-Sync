import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostComponent } from 'src/app/views/popups/new-post/new-post.component';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     // prettier-ignore
     constructor(
      private _dialog: MatDialog,
      private _overlay: Overlay,
     ){

    }
     ngOnInit(): void {}

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
}
