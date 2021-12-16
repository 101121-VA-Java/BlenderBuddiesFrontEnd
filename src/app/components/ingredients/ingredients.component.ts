import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  openform!: boolean;

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit(): void {
  }
  
  // redirect function for button
  ingrFormRedir() {
    console.log("redirecting to smoothie form...");
    this.router.navigate(['ingredient-form']);
  }

  onClickOpenForm(){
    this.openform=true;  
  }
  message: string = '';
  fruit?: any;
  ingrSubmit(){
      // add ingredient to database, then redirect to ingredients page
      this.router.navigate(['ingredients']);
    }

    Fruit(name: string){

      this.fruit = this.ingredientService.getFruit(name)
        
      
    }

}
