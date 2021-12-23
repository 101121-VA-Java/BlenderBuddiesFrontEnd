import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

  message: string = '';

  register(firstName: string, lastName: string, username: string, password: string, email: string){
    this.authService.registerUser(firstName, lastName, username, password, email)
    .subscribe(
      (data) => {
          this.router.navigate(['login']);
      });
  }
}
