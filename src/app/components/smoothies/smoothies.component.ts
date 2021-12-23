import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmoothieService } from 'src/app/services/smoothie.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  constructor(private authService: AuthService, private smoothieService: SmoothieService, private router: Router) { }

  ngOnInit(): void {
    this.getMostSmoothies()
  }

  smoothies?: any;

  getAllSmoothies() {
    this.smoothieService.getAllSmoothies().subscribe((response: any) => {
      this.smoothies = response;
    });

  }

  getMostSmoothies() {
    let id = this.authService.getUser();

    if (id != null && id != 1) {
      this.smoothieService.getMostSmoothies(id).subscribe((response: any) => {
        this.smoothies = response;
      });
    }
    if (id === 1) {
      this.getAllSmoothies()
    }

  }

  // redirect function for button
  smoothieRecipeRedir(id: any) {
    let smoothieId = id.id
    sessionStorage.setItem("smoothieId", smoothieId);
    this.router.navigate(['/recipe']);
  }

  someBoolean: boolean = false;
  buttonHider() {
    this.someBoolean = !this.someBoolean;
  }

}
