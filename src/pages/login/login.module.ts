import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {PostPage} from "../post/post";
import {PostModule} from "../post/post.module";

@NgModule({
  declarations: [
    LoginPage,
   // PostPage
  ],
  imports: [
   IonicPageModule.forChild(LoginPage),
    PostModule
  ],
  exports: [
   LoginPage
  ]
})
export class LoginPageModule {}
