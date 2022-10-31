import { Component, OnInit } from '@angular/core';
import { TargetServiceService } from '../target-service.service';
import { Router } from '@angular/router';
import { TargetDetail } from '../targetDetail.model';
import { catchError, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.component.html',
  styleUrls: ['./view-target.component.css']
})
export class ViewTargetComponent implements OnInit {

  
  targetDetails! : TargetDetail;
  constructor(private targetService : TargetServiceService,private router : Router,private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  ngOnInit(): void {
    this.reloadData();
   
    
  }
  reloadData(){
    console.log("In target component");
    this.targetDetails=new TargetDetail();
    this.targetService.getTarget()
      .subscribe(data => {
        console.log(data)
        this.targetDetails = data;
        if(this.targetDetails.amount==0)
        {
          this.openSnackBar("Target not set Yet !!!","Close");
          
        }
        if(this.targetDetails.amount>0)
        {
          this.openSnackBar("Target can be updated !!!","Close");
          
    }
      }, error => console.log(error));
    console.log(this.targetDetails);

    
    
  }

  targetMenu(){
    this.router.navigate(['/target']);
  }

}
