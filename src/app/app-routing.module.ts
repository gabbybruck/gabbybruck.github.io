import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {
    page: 'home'
  }},
  {path: 'ux/ui', component: PageComponent, data: {
    page: 'ux/ui'
  }},
  {path: 'illustration', component: PageComponent, data: {
    page: 'illustration'
  }},
  {path: 'about', component: PageComponent, data: {
    page: 'about'
  }},
  {path: 'contact', component: PageComponent, data: {
    page: 'contact'
  }},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
