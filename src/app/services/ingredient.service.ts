import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { createAbstractBuilder } from 'typescript';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor(private http: HttpClient) { }
  fruit?: any
  
  getIngredientByName(name: string):Observable<any>{
    console.log(name)
    return this.http.get(`${environment.API_URL}/ingredients?name=${name}`);
  }

  getAllIngredients():Observable<any>{
    return this.http.get(`${environment.API_URL}/ingredients`);
  }

 


  createNewIngredient(name: string, carbs: number, prot: number, phat: number, calo: number, suga: number){
    let newIngredient: Ingredient[] = [
      {name: name, nutritions: [{carbohydrates: carbs, protein: prot, fat: phat, calories: calo, sugar: suga}]}
    ]

    return this.http.post(`${environment.API_URL}/ingredients`, newIngredient);
  }


}

interface Ingredient {
  name: string;
  nutritions: Nutritions[]
}

interface Nutritions {
  carbohydrates: number; 
  protein: number; 
  fat: number; 
  calories: number; 
  sugar: number;
}

