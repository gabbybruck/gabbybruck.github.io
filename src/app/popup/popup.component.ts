import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  title: any;
  details: any;
  images: any;
  subtitle: any;
  constructor(public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.title = data.title;
    this.details = data.details;
    this.images = data.images;
    this.subtitle = data.subtitle;
   }

closeDialog(){
  this.dialogRef.close();
}


  ngOnInit(): void {
  }

}
