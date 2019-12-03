import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { post } from 'selenium-webdriver/http';
import {PostComponent} from './components/post/post.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { AuthGuard } from './Guard/guard.guard';
import { AddPostComponent } from './components/add-post/add-post.component';


const routes: Routes = [
  { path: 'post', component: PostComponent, },
  {path: 'register', component: RegisterComponent,},
  {path: 'login', component: LoginComponent},
  {path: 'add_post', component: AddPostComponent},
 {path: '',component: LoginComponent , pathMatch: 'full' },
 { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
