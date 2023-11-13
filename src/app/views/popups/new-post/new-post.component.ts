import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
     selector: 'app-new-post',
     templateUrl: './new-post.component.html',
     styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
     public dialogBoxData: any = null;

     // prettier-ignore
     constructor(
          @Inject(MAT_DIALOG_DATA) private _DIALOG_DATA: any,
          private _dialogRef: MatDialogRef<NewPostComponent>,
        ){
          this.dialogBoxData = this._DIALOG_DATA;
          console.log(this.dialogBoxData);
        }

     ngOnInit(): void {}

     public closeDialogBox() {
          let payload = {
               userName: 'Rajeev Kumar',
               page: 'NewPopupComponent'
          };
          this._dialogRef.close(payload);
     }
}
