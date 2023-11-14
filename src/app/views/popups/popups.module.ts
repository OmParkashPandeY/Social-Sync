import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { MatDialogModule } from '@angular/material/dialog';

// prettier-ignore
@NgModule({
  declarations: [
    NewPostComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class PopupsModule { }
