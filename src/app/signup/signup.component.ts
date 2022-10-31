import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthorisationService } from '../authorisation.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  userName !: string;
  password !: string;
  validCred : string ="";


  constructor(private authService : AuthorisationService, private router : Router ,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  signup(){
    if(this.userName==null || this.password==null || !(/^[a-zA-Z ]*$/.test(this.userName))) {

      if(this.password==null)
        this.validCred = "Username can't be empty";
      
      if(this.password==null)
        this.validCred = "Password can't be empty";
      
      if (!(/^[a-zA-Z ]*$/.test(this.userName))) 
        this.validCred = "Username cannot be a number";
                      
                      }  
    else{
      
      this.authService.register(this.userName,this.password)
      .subscribe((data)=>{
                          console.log(data);
                          console.log("Registration Successful");
                          this.router.navigate(['/login']);
                        },
                (error:any)=>{console.log(error)});

              this.openSnackBar("Successfully Signed up !!!","Close");  
             
    
}
}

}