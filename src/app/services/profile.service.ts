import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: any;

  constructor(private http: HttpClient) { }

  // getUser(name: string){
  //   console.log(name)
  //   this.http.get<any>(API_URL + 'users/{id}', { responseType: 'text' }).subscribe(data=>
  //   {
  //     this.user = data;
  //   })
  //   return this.user;
  // }

}
