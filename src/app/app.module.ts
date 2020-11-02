import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsConfig, ShareModule } from '@ngx-share/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SocialShareComponent } from './components/social-share/social-share.component';

const customConfig: ShareButtonsConfig = {
  twitterAccount: 'GGodage'
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    ScrollerComponent,
    CommentsComponent,
    SocialShareComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    FontAwesomeModule,
    ShareModule.withConfig(customConfig),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    CKEditorModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: 'addpost', component: BlogEditorComponent, canActivate: [AuthGuard] },
      { path: 'editpost/:id', component: BlogEditorComponent, canActivate: [AdminAuthGuard] },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: '**', component: HomeComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
