import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import{Data} from '../providers/data';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {SMS} from "@ionic-native/sms";
import {LoginPageModule} from "../pages/login/login.module";
import {LoginPage} from "../pages/login/login";

 // export const config = {
 //   apiKey: "AIzaSyBE89En2alR3vIbPxcRjX5hqUFZkTN7zEM",
 //   authDomain: "my-booklist-828df.firebaseapp.com",
 //   databaseURL: "https://my-booklist-828df.firebaseio.com",
 //   projectId: "my-booklist-828df",
 //   storageBucket: "my-booklist-828df.appspot.com",
 //   messagingSenderId: "422470411987"
 //  };

export const config = {
  apiKey: "AIzaSyD_k8iCuVHnRkj92_C64N5ggBdDRdrbq14",
  authDomain: "project1-7dbd8.firebaseapp.com",
  databaseURL: "https://project1-7dbd8.firebaseio.com",
  projectId: "project1-7dbd8",
  storageBucket: "project1-7dbd8.appspot.com",
  messagingSenderId: "505747231471"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    //LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SMS,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
