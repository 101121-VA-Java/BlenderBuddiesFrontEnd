import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smoothie-form',
  templateUrl: './smoothie-form.component.html',
  styleUrls: ['./smoothie-form.component.css']
})
export class SmoothieFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  smoothieRedirect() {
    // add ingredient to database, then redirect to smoothies page
    this.router.navigate(['smoothies']);
  }

}
