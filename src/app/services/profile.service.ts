import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  currentUser: any;
  user: any;
  

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(`${environment.API_URL}/users`);
  }
  
  getUserById(id: any):Observable<any>{
    console.log(id)
    return this.http.get(`${environment.API_URL}/users/${id}`);
  }

  updateUser(id: number, firstName: string, lastName: string, username: string, password: string, email: string){
    
    let currentUser: any = {username, password, firstName, lastName, email}
    console.log(currentUser);
    
    return this.http.put(`${environment.API_URL}/users/${id}`, currentUser);
  }

  updateUserRole(id: number, role: string) {
    let user: any = {id, role}
    if(this.user.role = "USER"){
       let user: any = {id, role: "ADMIN"}
    } else {
      let user: any = {id, role: "USER"}
    }
    console.log(user)
    return this.http.put(`${environment.API_URL}/users/${id}`, user);
  }

}
