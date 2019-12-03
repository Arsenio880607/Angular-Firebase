import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';
import {AuthService} from '../services/auth.service';


@Injectable({
  providedIn: 'root'
}
)
export class AuthGuard implements CanActivate {
  constructor(private afsAuth: AuthService, private router: Router) {
    
   }
  
  canActivate() {
    console.log();
   // if (!this.afsAuth.isAuth()) {
        console.log('No estás logueado');
        this.router.navigate(['login']);
        return false;
    }

   // return true;
}
