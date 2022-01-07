import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [trigger('fadeSlideInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('1000ms', style({ opacity: 0, transform: 'translateY(10px)' })),
    ]),
  ]),]
})
export class PageComponent implements OnInit {
  page: any;

  constructor(private route: ActivatedRoute,
    private contentService: ContentService,
    private dialogRef : MatDialog) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }

  openDialog(){
    this.dialogRef.open(PopupComponent,{});
    data : {
      text : "gabby"
    }
  }
}
