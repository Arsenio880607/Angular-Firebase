import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PostService } from '../../services/post.service';
import {AuthService } from '../../services/auth.service';
import {PostI} from '../../interfaces/post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  //private post:PostI;

  constructor(private post_servi:PostService, private athserv:AuthService, private rute:Router) { }

  loginForm = new FormGroup(
    {
      User_Name: new FormControl('', Validators.required),
    post_name: new FormControl('', Validators.required),
    cont: new FormControl('', Validators.required)
      }
      )

  addpost(post:PostI)
  {
    
    post.Date=new Date();
    //post.user_name=this.athserv.GetUser_Name();
   this.post_servi.addItem(post);
    console.log(post);
    this.rute.navigate(['post']);

  }
  ngOnInit()
   {
    }

}
