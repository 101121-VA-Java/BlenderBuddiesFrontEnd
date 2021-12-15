import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  // redirect function for button
  ingrFormRedir() {
    console.log("redirecting to smoothie form...");
    this.router.navigate(['ingredient-form']);
  }
}
