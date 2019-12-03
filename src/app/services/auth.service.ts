import { Injectable } from '@angular/core';
import {UserI} from '../interfaces/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;
  public user_name: string;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore)
   {
    this.userData = afAuth.authState;
   }

   SetUser_Name(pname:string)
   {
     this.user_name= pname;
   }

   GetUser_Name()
   {
     return this.user_name;
   }

  registerUser( email:string, password:string) 
     {
    
      this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
  })
     }
  loginByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
     return this.afAuth.authState.pipe(map(auth => auth));
  }
}