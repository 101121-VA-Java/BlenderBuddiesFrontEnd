import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  openform!: boolean;

  constructor(
    private ingredientService: IngredientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllIngredients();
  }

  onClickOpenForm() {
    this.openform = true;
  }
  message: string = '';
  ingredients?: any;
  ingrSubmit() {
    // add ingredient to database, then redirect to ingredients page
    this.router.navigate(['ingredients']);
  }

  Ingredient(name: string) {
    this.ingredientService.getIngredientByName(name).subscribe((response: any) => {
      this.ingredients = response;
      console.log(this.ingredients[0].nutritions);
    });
  }

  getAllIngredients() {
    this.ingredientService.getAllIngredients().subscribe((response: any) => {
      this.ingredients = response;
      console.log(this.ingredients[0].nutritions);
    });
  }
  someBoolean: boolean = false;
  ingredHider() {
    this.someBoolean = !this.someBoolean;
  }

  registerIngredient(
    name: string,
    carbs: number,
    prot: number,
    phat: number,
    calo: number,
    suga: number
  ) {
    this.ingredientService
      .createNewIngredient(name, carbs, prot, phat, calo, suga)
      .subscribe((data: any) => {
        console.log(data);
        // this.router.navigate(['login']);
      });
  }
}
