import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: any;

  constructor(private http: HttpClient) { }

  getProfile(): Observable<User> {
    return this.http.get(`${environment.API_URL}/users/{id}`)
      .pipe(
        map(response => response as User)
      )
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
