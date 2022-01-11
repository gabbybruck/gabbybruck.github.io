import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PopupComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule 
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
