import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, pipe, tap } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  private baseUrl =  'http://localhost:8080/authorization';

  user = new User();
  
  constructor(private  http :  HttpClient , private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  login(userName:string, password:string):  Observable < Object > {
    
    //send username password to auth service


    this.user.userName = userName;
    this.user.password = password;

    return    this.http.post(`${this.baseUrl}/login`, this.user,{responseType: 'text'}).
              pipe(tap(res => { 
                                localStorage.setItem('token', res);
                              }));
  }

  public get loggedIn(): boolean{

    return localStorage.getItem('access_token') !==  null;
  
  }

  register(userName:string, password:string) : Observable<any> {
    

    this.user.userName = userName;
    this.user.password = password;


    return this.http.post(`${this.baseUrl}/signup`, this.user);
  }

  logout(){
    localStorage.removeItem('token');
    this.openSnackBar("Successfully Logged Out !!!","Close");  
  }

  loggedInUser(): boolean{
    return !!localStorage.getItem('token')
  }

}
