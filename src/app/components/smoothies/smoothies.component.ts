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
    this.getAllSmoothies()
  }

  smoothies?: any;

  getAllSmoothies(){
    this.smoothieService.getAllSmoothies().subscribe((response: any) => {
      this.smoothies = response;
      console.log(this.smoothies);
    });

  }

  // redirect function for button
  smoothieRecipeRedir(id: any) {
    console.log("redirecting to smoothie recipe...");
    let smoothieId = id.id
    sessionStorage.setItem("smoothieId", smoothieId);
    this.router.navigate(['/recipe']);
  }
}
