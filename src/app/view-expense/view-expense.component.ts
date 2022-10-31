import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ExpenseDetail } from '../expenseDetails.model';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css'],
  providers: [HttpClient]
})
export class ViewExpenseComponent implements OnInit {

  expenseDetails! : Observable<ExpenseDetail[]>;

  constructor(private expenseService : ExpenseService , private router : Router) {
    
   }

  ngOnInit(): void {
    this.reloadData();
   
    
  }
  reloadData(){
    console.log("In expense component");
    this.expenseDetails=this.expenseService.getExpense();
  }

  expenseMenu(){
    this.router.navigate(['/expense']);
  }
  
  deleteExpenses(){
    this.expenseService.deleteExpenses()
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
        
      },
      error => console.log(error));
      this.router.navigate(['/expense']);
  }

  
}
