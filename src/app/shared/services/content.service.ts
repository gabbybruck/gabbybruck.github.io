import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectComponent } from 'src/app/project/project.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class ContentService {
  pages: any = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', images:[],logo:'assets/gb-logo.png'},
    'illustration': {title: 'ILLUSTRATION', subtitle: 'Welcome Home!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', imagesLeft:['assets/hands.jpg', 'assets/purple.jpg', 'assets/game.jpg','assets/pele.jpg','assets/tv-room.JPG', 'assets/cooking.jpg'], imagesRight:['assets/fruits.jpg','assets/snake.jpg', 'assets/phone.jpg', 'assets/mango.JPG','assets/red.jpg', 'assets/rihanna.jpg'],logo:'assets/gb-logo.png'},
    'projects': {title: 'PROJECTS', subtitle: 'Welcome Home!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ', imagesLeft:['assets/salutemp-logo-circle.png', 'assets/MFS.png', 'assets/shootout.png'], imagesRight:['assets/curates.png', 'assets/trains.png', 'assets/interactive-screenshot.png','assets/library.png', 'assets/easily.png'], logo:'assets/gb-logo.png'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', projects:[
      {title: 'Salutemp', subtitle: 'front-end dev & UX/UI', cover: 'assets/salutemp-logo-circle.png',details: 'front end dev and UX/UI design for digital companion app', detailPhotos: ['assets/salutemp-logo-circle.png', 'assets/salutemp-logo-circle.png']},
      {title: 'MFS', subtitle: 'QA Automation Co-op', cover: 'assets/MFS.png',details: 'QA Automation coop at MFS', detailPhotos: ['assets/MFS.png', 'assets/MFS.png']},
  
  ]},
    'contact': {title: 'Contact', subtitle: 'Contact Me', content: 'Contact Me: \n    vLinkedIn <br> Github <br>  Email', imagesLeft:['assets/LINKEDIN.png', 'assets/purple.jpg'], imagesRight:['assets/hands.jpg', 'assets/purple.jpg'],logo:'assets/gb-logo.png'}
  };


  art: any = {

  }

}
