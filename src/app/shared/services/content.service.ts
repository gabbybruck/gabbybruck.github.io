import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {
  pages: any = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', images:[],logo:'assets/gb-logo.png'},
    'illustration': {title: 'ILLUSTRATION', subtitle: 'Welcome Home!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', imagesLeft:['assets/hands.jpg', 'assets/purple.jpg', 'assets/game.jpg','assets/pele.jpg','assets/tv-room.JPG', 'assets/cooking.jpg'], imagesRight:['assets/fruits.jpg','assets/snake.jpg', 'assets/phone.jpg', 'assets/mango.JPG','assets/red.jpg', 'assets/rihanna.jpg'],logo:'assets/gb-logo.png'},
    'ux/ui': {title: 'UX/UI', subtitle: 'Welcome Home!', content: 'Some home content.', imagesLeft:['assets/hands.jpg', 'assets/purple.jpg'], imagesRight:['assets/hands.jpg', 'assets/purple.jpg'], logo:'assets/gb-logo.png'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', imagesLeft:['assets/hands.jpg', 'assets/purple.jpg'], imagesRight:['assets/hands.jpg', 'assets/purple.jpg'],logo:'assets/gb-logo.png'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', imagesLeft:['assets/hands.jpg', 'assets/purple.jpg'], imagesRight:['assets/hands.jpg', 'assets/purple.jpg'],logo:'assets/gb-logo.png'}
  };

}