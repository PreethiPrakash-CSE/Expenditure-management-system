import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExpenseDetail } from './expenseDetails.model';
import { catchError, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  username !: string;
  expenseDetail !: ExpenseDetail;
  constructor(private http : HttpClient, private router:Router, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  addExpense(expenseDetail : ExpenseDetail):Observable<any>{
    this.expenseDetail=expenseDetail;
    console.log("In add Expense service");
    console.log(this.expenseDetail);
    this.openSnackBar("Expense Added !!!","Close"); 
    return this.http.post(`http://localhost:8081/expense/addExpense`, this.expenseDetail);
  }

  getExpense():Observable<any>{
    this.username=localStorage.getItem("username")||"";
    console.log("In get Expense service");
    console.log(this.username);
    return this.http.get(`http://localhost:8081/expense/getExpenses/${this.username}`); 
  }

  deleteExpenses(): Observable<any> {
    this.username=localStorage.getItem("username")||"";
    console.log("In delete Expense service");
    this.openSnackBar("Expenses re-setted !!!","Close");
    console.log(this.username);
    return this.http.delete(`http://localhost:8081/expense/deleteExpenses/${this.username}`);
  }

  getSeverityResponse(): Observable<any>{
    this.username=localStorage.getItem("username")||"";
    console.log("In getSeverityResponse expense service");
    console.log(this.username);
    return this.http.get(`http://localhost:8083/severity/expenditureStatus/${this.username}`);
  }

}
