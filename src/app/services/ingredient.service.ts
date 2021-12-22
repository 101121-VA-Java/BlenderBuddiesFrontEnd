import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor(private http: HttpClient) { }
  fruit?: any

  getIngredientByName(name: string): Observable<any> {
    console.log(name)
    return this.http.get(`${environment.API_URL}/ingredients?name=${name}`);
  }

  getAllIngredients(): Observable<any> {
    return this.http.get(`${environment.API_URL}/ingredients`);
  }

  createNewIngredient(name: string, carbs: number, prot: number, phat: number, calo: number, suga: number) {
    let newIngredient: Ingredient =
      { name: name, nutritions: { carbohydrates: carbs, protein: prot, fat: phat, calories: calo, sugar: suga } }
    console.log(newIngredient);
    return this.http.post(`${environment.API_URL}/ingredients`, newIngredient);
  }

  createNewSmoothie(name: string, descrip: string, url: string, type: string, userId: number, id: Ingredient1[]) {
    let newSmoothie: Smoothie =
      { name: name, descrip: descrip, url: url, type: type, user: { userId: userId }, recipe: id }
    console.log(newSmoothie);
    return this.http.post(`${environment.API_URL}/smoothies`, newSmoothie);
  }


}

interface Ingredient {
  name: string;
  nutritions: Nutritions
}

interface Ingredient1 {
  id: number;
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

interface Smoothie {
  name: string;
  descrip: string;
  url: string;
  type: string;
  user: User;
  recipe: Ingredient1[];
}

interface User {
  userId: number;
}

interface Recipe {
  id: number;
}

