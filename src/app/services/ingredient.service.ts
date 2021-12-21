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
  
  getIngredientByName(name: string):Observable<any>{
    console.log(name)
    return this.http.get(`${environment.API_URL}/ingredients?name=${name}`);
  }

  getAllIngredients():Observable<any>{
    return this.http.get(`${environment.API_URL}/ingredients`);
  }

}