import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MaterialModule } from '@angular/material.module';
//import { MatSliderModule } from '@angular/material/slider';

import { environment } from '../environments/environment';
import {MaterialModule} from './material.module';

//-----FIREBASE-------
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import {PostService} from './services/post.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    HomeComponent,
    AddPostComponent,
   
    //MatSliderModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFirestoreModule ,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
     
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [ {provide: StorageBucket, useValue: 'gs://ngblog-eab58.appspot.com'},PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
