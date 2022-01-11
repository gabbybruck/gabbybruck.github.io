import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { ContentService } from '../shared/services/content.service';
import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: any;

  constructor(private route: ActivatedRoute,private contentService: ContentService,
    private dialogRef : MatDialog) {
     }

  ngOnInit() {
    const curPage = this.route.snapshot.data['page'];
    const pageData = this.contentService.pages[curPage];
    this.projects = pageData.projects;
  
  }

  openDialog(project : Project){
    this.dialogRef.open(PopupComponent,{
    data : {
      title : project.title,
      subtitle : project.subtitle,
      images : project.detailPhotos,
      details : project.details
    }
  });
  }

}
