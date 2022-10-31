import { Component, OnInit } from '@angular/core';
import { TargetServiceService } from '../target-service.service';
import { Router } from '@angular/router';
import { TargetDetail } from '../targetDetail.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  username !: string;
  amount !: number;
  targetDetail !: TargetDetail;
  response !: string;

  constructor(private targetService : TargetServiceService, private  router : Router,private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  ngOnInit(): void {
  }

  check(){
    this.username=localStorage.getItem("username")||""; 
    this.targetDetail=new TargetDetail();
    this.targetService.getTarget()
      .subscribe(data => {
        console.log(data)
        this.targetDetail = data;
        if(this.targetDetail.amount==0)
        {
          
          this.router.navigate(['/setTarget']);
          
        }
        else if(this.targetDetail.amount>0)
        {
          this.openSnackBar("Target already set ,can be updated !!!","Close");
          this.router.navigate(['/target']);
          
    }
      }, error => console.log(error));
    
    
    
  }

  checkUpdateTarget(){
    this.username=localStorage.getItem("username")||""; 
    this.targetDetail=new TargetDetail();
    this.targetService.getTarget()
      .subscribe(data => {
        console.log(data)
        this.targetDetail = data;
        if(this.targetDetail.amount==0)
        {
          this.openSnackBar("Target not set yet !!!","Close");
          this.router.navigate(['/target']);
          
        }
        else if(this.targetDetail.amount>0)
        {
          this.router.navigate(['/updateTarget']);
          
    }
      }, error => console.log(error));
    
    
    
  }

  mainMenu(){
    this.router.navigate(['/menu']);
  }

}
