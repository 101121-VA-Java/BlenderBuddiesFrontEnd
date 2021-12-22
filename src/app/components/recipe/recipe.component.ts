import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toNumber } from 'lodash';
import { SmoothieService } from 'src/app/services/smoothie.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private smoothieService: SmoothieService, private router: Router) { }

  ngOnInit(): void {
    this.getSmoothieById();
  }

  smoothie?: any;
  totalCalo?: number = 0;
  totalCarbs?: number = 0;
  totalPhat?: number = 0;
  totalProt?: number = 0;
  totalSuga?: number = 0;
  recipe?: any = [];

  getSmoothieById() {
    let id: any = sessionStorage.getItem("smoothieId");
    if (id != null) {
      id = toNumber(id)
    }

    this.smoothieService.getSmoothiesById(id).subscribe((response: any) => {
      this.smoothie = response;
      this.recipe = this.smoothie.recipe;
      for (var item in this.recipe) {
        this.totalCalo += this.recipe[item].nutritions.calories
        this.totalCarbs += this.recipe[item].nutritions.carbohydrates
        this.totalPhat += this.recipe[item].nutritions.fat
        this.totalProt += this.recipe[item].nutritions.protein
        this.totalSuga += this.recipe[item].nutritions.sugar
      }
    });

  }

}
