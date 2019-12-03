import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {PostI} from '../../interfaces/post.interface';
import {PostService} from '../../services/post.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit
 {
  items: Observable<PostI[]>;
  user: string;
  constructor(private post_servi:PostService, private authSvc: AuthService, private rute:Router)
   { 
    this.items = this.post_servi.ListPost();
    this.user=this.authSvc.GetUser_Name();
    //this.user=user_login.User_Name;
   }
 
  onNewPost()
  {
    this.rute.navigate(['add_post']);
  }

  ngOnInit()
  {}
  
}


  
   

