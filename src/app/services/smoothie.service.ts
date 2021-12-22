import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  constructor(private http: HttpClient) { }

  getAllSmoothies(): Observable<any> {
    return this.http.get(`${environment.API_URL}/smoothies`);
  }

  getSmoothiesById(id: number): Observable<any> {
    return this.http.get(`${environment.API_URL}/smoothies/${id}`);
  }




}


interface Ingredient {
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
  recipe: Ingredient[];
}

interface User {
  userId: number;
}
