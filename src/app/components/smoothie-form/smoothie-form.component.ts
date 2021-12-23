import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from 'src/app/services/ingredient.service';
import { SmoothieService } from 'src/app/services/smoothie.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-smoothie-form',
  templateUrl: './smoothie-form.component.html',
  styleUrls: ['./smoothie-form.component.css']
})

export class SmoothieFormComponent implements OnInit {

  constructor(private ingredientService: IngredientService, private smoothieService: SmoothieService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  message: string = '';
  ingredients?: any;
  smoothie?: any = [];
  totalCalo?: number = 0;
  totalCarbs?: number = 0;
  totalPhat?: number = 0;
  totalProt?: number = 0;
  totalSuga?: number = 0;

  getIngredientbyName(name: string) {
    this.ingredientService.getIngredientByName(name).subscribe((response: Ingredient) => {
      this.ingredients = response;
      this.smoothie.push(this.ingredients[0]);
      this.totalCalo += this.ingredients[0].nutritions.calories
      this.totalCarbs += this.ingredients[0].nutritions.carbohydrates
      this.totalPhat += this.ingredients[0].nutritions.fat
      this.totalProt += this.ingredients[0].nutritions.protein
      this.totalSuga += this.ingredients[0].nutritions.sugar
    });
  }

  removeIngredient(name: string) {
    for (var item in this.smoothie) {
      if (this.smoothie[item].name === name) {
        if (this.totalCalo && this.totalCarbs && this.totalPhat && this.totalProt && this.totalSuga) {
          this.totalCalo -= this.smoothie[item].nutritions.calories
          this.totalCarbs -= this.smoothie[item].nutritions.carbohydrates
          this.totalPhat -= this.smoothie[item].nutritions.fat
          this.totalProt -= this.smoothie[item].nutritions.protein
          this.totalSuga -= this.smoothie[item].nutritions.sugar

        }
        this.smoothie.splice(item, 1)
        break;
      }
    }

  }

  createSmoothie(name: string, descrip: string, url: string) {
    let id = this.authService.getUser();
    let role = this.authService.getRole();
    if (role != null && id != null) {
      this.smoothieService.createNewSmoothie(name, descrip, url, role, id, this.smoothie).subscribe((data: any) => {
        console.log("Success");
        this.router.navigate(['smoothies']);
      });
    }

  }

}

interface Ingredient {
  name: string;
  nutritions: Nutritions
}

interface Nutritions {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}
