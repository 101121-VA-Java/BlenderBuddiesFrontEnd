import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  message: string = '';

  login(username: string, password: string) {

    this.authService.authenticate(username, password).subscribe(
      (response: any) => {
        // navigates us back to the main page
        this.router.navigate(['']);
      },
      (      err: { error: { error: string; }; }) => {
        this.message = err.error.error;
      }
    );

  }
  registerPage(){
    console.log("Regpage")
    this.router.navigate(['register']);
  }
}
