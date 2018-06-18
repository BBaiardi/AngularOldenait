import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// AngularFire2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';
import { ClubService } from './services/club.service';
import { environment } from '../environments/environment';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    GoogleMapsComponent,
    UserLoginComponent,
    UserProfileComponent,
    EventDetailComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    ClarityModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [EventService, ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
