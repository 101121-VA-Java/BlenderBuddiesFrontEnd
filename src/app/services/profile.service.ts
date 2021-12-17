import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: any;

  constructor(private http: HttpClient) { }

  getUser(name: string){
    console.log(name)
    this.http.get<any>(`http://localhost:8080/users/{id}`).subscribe(data=>
    {
      this.user = data.total;
    })
    return this.user;
  }

}
