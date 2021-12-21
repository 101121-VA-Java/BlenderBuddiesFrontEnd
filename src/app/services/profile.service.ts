import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  currentUser: any;
  

  constructor(private http: HttpClient) { }
  
  getUserById(id: any):Observable<any>{
    console.log(id)
    return this.http.get(`${environment.API_URL}/users/${id}`);
  }

  updateUser(id: number, firstName: string, lastName: string, username: string, password: string, email: string){
    
    let currentUser: any = {username, password, firstName, lastName, email}
    console.log(currentUser);
    
    return this.http.put(`${environment.API_URL}/users/${id}`, currentUser);
  }
  // updateUser(data: string){
  //   console.log(name)
  //   this.http.put<any>('${environment.API_URL}/users/{id}', { responseType: 'text' }).subscribe(data=>
  //   {
  //     this.user = data;
  //   })
  //    return this.http.post(AUTH_API + '/users', { email, password, firstname, lastname}, httpOptions);
  //   }
  // }
}
