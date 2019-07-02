import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Plugin
import { IonicStorageModule } from '@ionic/storage';


//Firebase Import
import { firebaseConfig } from './configs/firebase';

//Providers
import { AuthProvider } from '../providers/auth';
import {FirebaseProvider } from '../providers/data';

//Angular Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {GooglePlus} from '@ionic-native/google-plus/ngx';

import {StreamingMedia} from  '@ionic-native/streaming-media/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    GooglePlus,
    AuthProvider,
    FirebaseProvider,
    StatusBar,
    SplashScreen,
    StreamingMedia,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
