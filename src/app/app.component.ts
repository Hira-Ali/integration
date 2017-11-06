import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from "firebase";
import {LoginPage} from "../pages/login/login";
//import { config } from "./app.module";
import {PostPage} from "../pages/post/post";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

   const config = {
    //   // apiKey: "AIzaSyBV-SJdkxr3uvJ9sVHssR8H0zE0aV3EoNI",
    //   // authDomain: "scms-acb9d.firebaseapp.com",
    //   // databaseURL: "https://scms-acb9d.firebaseio.com",
    //   // projectId: "scms-acb9d",
    //   // storageBucket: "scms-acb9d.appspot.com",
    //   // messagingSenderId: "666733839277"
    //
      apiKey: "AIzaSyD_k8iCuVHnRkj92_C64N5ggBdDRdrbq14",
      authDomain: "project1-7dbd8.firebaseapp.com",
      databaseURL: "https://project1-7dbd8.firebaseio.com",
      projectId: "project1-7dbd8",
      storageBucket: "project1-7dbd8.appspot.com",
      messagingSenderId: "505747231471"
    //
    //
     };
     firebase.initializeApp(config);


    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.rootPage = PostPage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
