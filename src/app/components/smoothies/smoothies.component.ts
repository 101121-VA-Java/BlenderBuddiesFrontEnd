import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // redirect function for button
  smoothieFormRedir() {
    console.log("redirecting to smoothie form...");
    this.router.navigate(['/smoothie-form']);
  }
}
