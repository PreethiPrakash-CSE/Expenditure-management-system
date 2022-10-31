import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TargetServiceService } from '../target-service.service';
import { TargetDetail } from '../targetDetail.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.css']
})
export class SetTargetComponent implements OnInit {

  username !: string;
  amount !: number;
  targetDetail !: TargetDetail;
  response !: string;

  constructor(private targetService : TargetServiceService, private router: Router,private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      panelClass: 'my-custom-snackbar'
    });
  }

  ngOnInit(): void {
    
  }

  

  submit(){

    console.log("form submitted");   
    this.username=localStorage.getItem("username")||""; 
    this.targetDetail=new TargetDetail();
    
    this.targetDetail.amount=this.amount;
    this.targetDetail.userName=this.username;
    


    this.targetService.setTarget(this.targetDetail);
    
    this.targetService.setTarget(this.targetDetail)
    .subscribe((data)=>{
                        console.log(data);
                        this.response = data;
                        },
                        (error : any)=>{                      
                          console.log(error);
                          this.router.navigate(['/target'])
                        }
              );

          
        
      }

  targetMenu(){
    this.router.navigate(['/target']);
  }


    
  }




