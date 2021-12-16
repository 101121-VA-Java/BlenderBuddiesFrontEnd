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
  
  getFruit(name: string){
    console.log(name)
    this.http.get<any>(`https://www.fruityvice.com/api/fruit/${name}`).subscribe(data=>
    {
      this.fruit = data.total;
    })
    return this.fruit;
  }









}
