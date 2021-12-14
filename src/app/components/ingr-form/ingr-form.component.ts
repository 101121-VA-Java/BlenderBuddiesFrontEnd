import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingr-form',
  templateUrl: './ingr-form.component.html',
  styleUrls: ['./ingr-form.component.css']
})
export class IngrFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingrSubmit(){
    // add ingredient to database, then redirect to ingredients page
    this.router.navigate(['ingredients']);
  }

}
