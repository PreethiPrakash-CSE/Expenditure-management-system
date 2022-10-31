import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';  

import { AuthorisationService } from '../authorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userName !: string;
  password !: string;
  flag !: boolean;
  validCred : string ="";


  constructor(private authService : AuthorisationService , private  router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.userName!=null && this.password!=null){
      console.log(this.userName);
      console.log(this.password);
      this.authService.login(this.userName,this.password)
      .subscribe((data:any): void=>{
                          console.log(data);
                          console.log("Login Successful");
                          localStorage.setItem("username",this.userName);
                          console.log("username set in local storage");
                          console.log(localStorage.getItem("username"));
                          this.router.navigate(['/menu'])
                        },
                (error:any)=>{
                  console.log(error);
                  this.validCred = "INVALID CREDENTIALS!!!";
                  this.router.navigate(['/login']);
                });

  }
  else{
    this.validCred = "Username or Password cannot be empty";
    
  }
}


}
