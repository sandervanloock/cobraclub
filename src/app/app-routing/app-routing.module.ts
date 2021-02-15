import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { ClubpageComponent } from '../clubpage/clubpage.component';
import { StatutenpageComponent } from '../statutenpage/statutenpage.component';
import { LedenpageComponent } from '../ledenpage/ledenpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },{
    path: 'club',
    component: ClubpageComponent,
  },{
    path: 'statuten',
    component: StatutenpageComponent,
  },{
    path: 'lid',
    component: LedenpageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
