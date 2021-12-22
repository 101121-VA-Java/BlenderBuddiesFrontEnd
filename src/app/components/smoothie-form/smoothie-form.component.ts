import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import { identity } from 'lodash';
import {
  IngredientService
} from 'src/app/services/ingredient.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-smoothie-form',
  templateUrl: './smoothie-form.component.html',
  styleUrls: ['./smoothie-form.component.css']
})
export class SmoothieFormComponent implements OnInit {

  constructor(private ingredientService: IngredientService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  smoothieRedirect() {
    // add ingredient to database, then redirect to smoothies page
    this.router.navigate(['smoothies']);
  }

  message: string = '';
  ingredients ? : any;
  smoothie ? : any = [];
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
      console.log(this.totalCalo);
      // console.log(this.ingredients[0].nutritions.calories);
      console.log(this.smoothie);
    });
  }

  removeIngredient(name: string) {
    for (var item in this.smoothie) {
      if(this.smoothie[item].name === name){
        console.log(item)
        if(this.totalCalo && this.totalCarbs && this.totalPhat && this.totalProt && this.totalSuga){
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

  createSmoothie(name: string, descrip: string, url: string){
    let id = this.authService.getUser();
    let role = this.authService.getRole();
    // const selectedIds = this.smoothie.map(({id}:any) => id);
    if (role != null && id != null){
      this.ingredientService.createNewSmoothie(name, descrip, url, role, id, this.smoothie).subscribe((data: any) => {
        console.log("Success");
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
