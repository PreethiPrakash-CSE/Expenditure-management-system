import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { SeverityResponse } from '../severityResponse.model';

@Component({
  selector: 'app-expense-severity',
  templateUrl: './expense-severity.component.html',
  styleUrls: ['./expense-severity.component.css']
})
export class ExpenseSeverityComponent implements OnInit {

  severityResponse !: SeverityResponse; 
  
  constructor(private expenseService : ExpenseService,private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
   
    
  }
  reloadData(){
    console.log("In expense-severity component");
    this.severityResponse= new SeverityResponse();
    this.expenseService.getSeverityResponse()
      .subscribe(data => {
        console.log(data)
        this.severityResponse = data;
       
      }, error => console.log(error));
    console.log(this.severityResponse);

  }

  mainMenu(){
    this.router.navigate(['/menu']);
  }

}
