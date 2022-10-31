import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthorisationService } from './authorisation.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authservice: AuthorisationService, private router: Router){}
  
  canActivate():boolean {
    if(this.authservice.loggedInUser()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
     
    }
    

  

}