import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormsComponent } from './postForms/postForms.component';
import { SocialPostsComponent } from './socialPosts/socialPosts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormsComponent,
    SocialPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
