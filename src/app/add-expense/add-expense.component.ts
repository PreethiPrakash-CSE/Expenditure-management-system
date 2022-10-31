import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { ExpenseDetail } from '../expenseDetails.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  providers: [HttpClient]
})
export class AddExpenseComponent implements OnInit {

  username !: string;
  description !: string;
  category !: string;
  amount !: number;
  expenseDetail !: ExpenseDetail;
  response !: string;

  constructor( private expenseService : ExpenseService , private router : Router) {  }

  ngOnInit(): void {
    
  }
  submittedAns(e : any){

    //console.log(index);
    //console.log(e.target.value);

    this.category = e.target.value;
    

  }

  submit(){

    console.log("form submitted");   
    this.username=localStorage.getItem("username")||""; 
    this.expenseDetail=new ExpenseDetail();
    this.expenseDetail.description=this.description;
    this.expenseDetail.category=this.category;
    this.expenseDetail.amount=this.amount;
    this.expenseDetail.userName=this.username;
    
    this.expenseService.addExpense(this.expenseDetail);
    
    this.expenseService.addExpense(this.expenseDetail)
    .subscribe((data)=>{
                        console.log(data);
                        this.response = data;
                        },
                        (error : any)=>{console.log(error);
                          this.router.navigate(['/expense'])}
              );

    console.log("Expense details obj created");
    console.log(this.expenseDetail);
    this.router.navigate(['/expense']);
  }

  
}


