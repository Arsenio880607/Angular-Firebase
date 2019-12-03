import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import {UserI} from '../../interfaces/user.interface';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
 {
   public email:string="";
   public password:string="";
   
  constructor(private authSvc: AuthService, private route: Router,  private auth: AngularFireAuth) {
   
   // this.registerUser2();
   }

   registerForm = new FormGroup({
      name2: new FormControl('',Validators.required),
   email2: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
                     })
  ngOnInit() {
  }

  registerUser2(  ) 
  {
 
   this.auth
   .auth
   .createUserWithEmailAndPassword(this.email, this.password)
   .then(value => {
     console.log('Success!', value);
     this.route.navigate(['login']);
   })
   .catch(err => {
     console.log('Something went wrong:',err.message);
})
  }

  register( ) 
  { 
  /* this.authSvc   
    .registerUser(this.email,this.password)
      .then((res) => 
      {
        this.authSvc.isAuth().subscribe(user=>
          {
          if(user)
          {
           // user.updateProfile({displayName:form.name})
          
          }
          console.log('Successfully', res);
          this.route.navigate(['login']);
          })
        
      })
      .catch(err => console.log('Error', err));
  }
*/
  }}
  