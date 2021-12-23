import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit(): void {
    this.getAllIngredients();
  }

  openform!: boolean;
  message: string = '';
  ingredients?: any;
  someBoolean: boolean = false;

  onClickOpenForm() {
    this.openform = true;
  }

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
    });
  }

  ingredHider() {
    this.someBoolean = !this.someBoolean;
  }

  registerIngredient(name: string, carbs: string, prot: string, phat: string, calo: string, suga: string) {
    const currentRoute = this.router.url;
    this.ingredientService
      .createNewIngredient(name, Number(carbs), Number(prot), Number(phat), Number(calo), Number(suga))
      .subscribe((data: any) => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['ingredients']);
      })
      });
  }
}
