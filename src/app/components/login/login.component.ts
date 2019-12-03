import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserI} from '../../interfaces/user.interface';
import {AuthService} from '../../services/auth.service';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public User_Name:string;

  constructor(private authSvc: AuthService, private route: Router) {
    
  }

    loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  onLogin(form: UserI) {
    this.authSvc
      .loginByEmail(form)
      .then(res => {
        this.route.navigate(['post']);
        console.log('Successfully', res);
        //this.authSvc.SetUser_Name(res.user.displayName)
        //this.User_Name= res.user.displayName;
       // console.log(this.User_Name);
        
                  })
      //.catch(err => console.log('Error', err));
     // this.authSvc.SetUser_Name(this.User_Name);
      
  }

}
