import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { HomePageComponent } from './ui/home-page/home-page.component';

const routes: Routes = [
  { path: 'event', component: EventComponent,
children: [{  path: ':name', component: EventDetailComponent }] },
  { path: 'map', component: GoogleMapsComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-profile', component: UserProfileComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
