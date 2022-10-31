import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TargetDetail } from './targetDetail.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetServiceService {

  

  username !: string;
  targetDetail !: TargetDetail;

  constructor(private http : HttpClient, private router:Router, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  setTarget(targetDetail : TargetDetail):Observable<any>{
    this.targetDetail=targetDetail;
    console.log("In setTarget method of Target service");
    console.log(this.targetDetail);
    this.openSnackBar("Target set !!!","Close"); 
    return this.http.post<any>(`http://localhost:8082/target/setTarget`, this.targetDetail);
  }

  getTarget():Observable<any>{
    this.username=localStorage.getItem("username")||"";
    console.log("In get Target service");
    console.log(this.username);
    return this.http.get(`http://localhost:8082/target/getTarget/${this.username}`); 
  }

  updateTarget(targetDetail : TargetDetail):Observable<any>{
    this.targetDetail=targetDetail;
    console.log("In updateTarget method of Target service");
    console.log(this.targetDetail);
    this.openSnackBar("Target updated !!!","Close"); 
    return this.http.put<any>(`http://localhost:8082/target/updateTarget`, this.targetDetail);
  }

}
