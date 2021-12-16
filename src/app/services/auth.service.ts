import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Principal } from '../models/principal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser?: Principal;
  token: string = '';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {

    // preparing our credentials to be in the body as form params
    let credentials = `username=${username}&password=${password}`;

    //environment allows us to easily switch between dev and prod values
    return this.http.post(`${environment.API_URL}/auth`, credentials, {
      headers: {
      // leverages form params to not expose credentials to the url
        'Content-type': 'application/x-www-form-urlencoded'
      },
      // indicates that we'll be interacting with the whole response rather than just the response body, gives us access to the headers
      observe: 'response',
    }).pipe(
      map(response => {
        // takes the principal user returned to be stored in the current user variable for use in other components
        this.currentUser = response.body as Principal;
        // retrieves the token from the headers to be leveraged in future http requests
        this.token = response.headers.get('Authorization') || '';
        sessionStorage.setItem("token", this.token);
        console.log(this.token);
      }
      )
    );

  }

  logout(): void {
    this.currentUser = undefined;
    this.token = '';
  }

  registerUser(firstName: string, lastName: string, username: string, password: string, email: string){
    //let newUser: any = `username=${username}&password=${password}&firstName=${firstName}&lastName=${lastName}&email=${email}&role='USER'`;
    let newUser: any = {username, password, firstName, lastName, email, role:'USER'}
    console.log(newUser);
    return this.http.post(`${environment.API_URL}/users`, newUser, {
      headers: {
        // leverages form params to not expose credentials to the url
          'Content-type': 'application/json'
        },
        // indicates that we'll be interacting with the whole response rather than just the response body, gives us access to the headers
        observe: 'response',
      }).pipe(
        map(response => {
          // takes the principal user returned to be stored in the current user variable for use in other components
          newUser = response.body;
          // retrieves the token from the headers to be leveraged in future http requests
          // this.token = response.headers.get('Authorization') || '';
          // console.log(this.token);
        }
        )
      );
  
    }
  
}
