import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectComponent } from 'src/app/project/project.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable()
export class ContentService {
  pages: any = {
    'about': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', images:[],logo:'assets/gb-logo.png'},
    'illustration': {title: 'ILLUSTRATION', subtitle: 'Welcome Home!', content: '', 
    projectsL:[
      {cover:'assets/hands.jpg', details: 'Bridge - Gouache', detailPhotos:['assets/hands.jpg']},
      {cover:'assets/purple.jpg', details: 'Allie - Digital', detailPhotos:['assets/purple.jpg']},
      {cover:'assets/game.jpg', details: 'Jacob - Digital', detailPhotos:['assets/game.jpg']},
      {cover:'assets/pele.jpg', details: 'Pele 1970 World Cup - Digital', detailPhotos:['assets/pele.jpg']},
      {cover:'assets/tv-room.JPG', details: 'Jacob - Digital', detailPhotos:['assets/tv-room.JPG']},
      {cover:'assets/cooking.jpg',  details: 'Learning to Cook - Digital', detailPhotos:['assets/cooking.jpg']},],
    projectsR:[
      {cover:'assets/fruits.jpg', details: 'August Fruits - Digital', detailPhotos:['assets/fruits.jpg']},
      {cover:'assets/snake.jpg', details: 'Bath - Digital', detailPhotos:['assets/snake.jpg']},
      {cover:'assets/phone.jpg', details: 'On Hold - Oil Paint', detailPhotos:['assets/phone.jpg']},
      {cover:'assets/mango.JPG', details: 'Summer Portrait - Digital', detailPhotos:['assets/mango.JPG']},
      {cover:'assets/red.jpg', details: 'Red - Digital', detailPhotos:['assets/red.jpg']},
      {cover:'assets/rihanna.jpg', details: 'Rihanna - Digital', detailPhotos:['assets/rihanna.jpg']},],
      logo:'assets/gb-logo.png'},

    'projects': {title: 'PROJECTS', subtitle: 'Welcome Home!', content: 'Here are some past and present projects I am working on!',  logo:'assets/gb-logo.png',
    projectsL:[
      {title: 'Salutemp Companion App', subtitle: 'Mobile Development & UX/UI Design - React Native/Objective C', cover: 'assets/salutemp-logo-circle.png',details: 'Salutemp is a new venture working to develop a temperature-sensing device that will provide patients with alerts as well as drug facts, enabling them to safely store and use their medicines. I worked on designing and implementing a React Native mobile companion app to help users monitor temperature-sensitive medicine. I worked collaboratively on the full-stack application by designing REST API endpoints and implementing features. I also developed a user-friendly setup process that interfaced with hardware devices and created a usable and engaging mobile experience through the design and iteration of wireframes, interfaces, and interactions. We collected & analyzed user feedback from 10 individuals by deploying app to the Google Play Store and coordinating users for alpha testing.', detailPhotos: ['assets/sal_1.png', 'assets/sal_2.png', 'assets/sal_3.png']},
      {title: 'Easy Animator', subtitle: 'Animation Software - Java/Java Swing', cover: 'assets/interactive-screenshot.png',details: 'As a project for Northeastern’s Object-Oriented Design course I created an animation software with a partner using Java and Java Swing. We designed the software using the Model/View/Controller pattern. The software accepts animation instructions in text format and supports several views: a visual animation, SVG format, and text format. Additionally the interface for the software supports user interaction through customizable playback. ', detailPhotos: ['assets/interactive-screenshot.png']},
      {title: 'Curated', subtitle: 'User Experience Design', cover: 'assets/curates.png',details: 'As a project for Northeastern’s Experience Design II course I designed an app to promote ‘guided spontaneity’ alongside two of my classmates. We designed our product using UX practices such as mental models, personas, surveys, and user testing in addition to creating a marketing mockup and high fidelity wireframes.', detailPhotos: ['assets/curates.png']},
      {title: 'Library Database', subtitle: 'Database Design Final Project', cover: 'assets/library.png',details: 'QA Automation coop at MFS', detailPhotos: ['assets/MFS.png', 'assets/MFS.png']},
    ], projectsR:[
      {title: 'MFS Investment Management', subtitle: 'QA Automation Co-op', cover: 'assets/MFS.png',details: 'Last spring I completed a 6 month co-op at MFS Investment Management as a QA Automation Co-op. As a co-op I contributed to the development and maintenance of cross-browser testing scripts using Selenium WebDriver, TestNG and Java in order to improve the performance of web applications. I also contributed to development of Applitools visual tests for cross-browser Ad Campaign as well as monitored build health for dev and prod environments using Jenkins Continuous Integration tools.', detailPhotos: ['assets/MFS.png']},
      {title: 'Trains Game', subtitle: 'Software Development Project - Java', cover: 'assets/trains.png',details: 'I built a Ticket to Ride Game with a partner as a project for Northeastern’s Software Development course. The software allows for remote clients to connect to our server and play our game using AI strategies by supporting communication through JSON messages back and forth between client and server. We implemented this communication layer of our project using the remote proxy design pattern.  ', detailPhotos: ['assets/trains.png']},
      {title: 'Soccer Shootout', subtitle: 'Javascript Game', cover: 'assets/shootout.png',details: 'I created a soccer penalty shootout game using Javascript and the D3.js library.', detailPhotos: ['assets/shootout.png']},
      {title: 'Easely', subtitle: 'UX Design Project', cover: 'assets/easily.png',details: 'QA Automation coop at MFS', detailPhotos: ['assets/MFS.png', 'assets/MFS.png']},
    ]},

    
    'home': {title: 'About', subtitle: 'Contact Me', content: 'Hi! My name is Gabby Bruck and I am a Computer Science and Experience Design Major at Northeastern University in Boston, MA. My interests include software design and development and designing accessible user centric experiences. When I’m not working I enjoy drawing and painting which I’ve included on my website as well! ', linkTitles:['bruck.g@northeastern.edu', 'GitHub', 'LinkedIn'], links:['mailto: bruck.g@northeastern.edu', 'https://github.com/gabbybruck', 'https://www.linkedin.com/in/gabrielle-bruck-430a3a159/'], 
    image:'assets/profile2.jpg',logo:'assets/gb-logo.png'}
  };


  art: any = {

  }

}
