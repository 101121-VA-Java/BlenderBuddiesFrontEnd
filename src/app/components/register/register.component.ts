import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // firstName: string="";
  
  // lastName: string="";
  // username: string="";
  // password: string="";
  // email: string="";

  constructor(private authService: AuthService, private router: Router) { }
  message: string = '';
  ngOnInit(): void {
  }
  register(firstName: string, lastName: string, username: string, password: string, email: string){
  // register(){
    console.log("Register is being invoked")
    this.authService.registerUser(firstName, lastName, username, password, email).subscribe(
      (response)=> {
        
        this.router.navigate(['login']);
      },
      err => {
        this.message = err.error.error;
      }
    );
    
  }
}
