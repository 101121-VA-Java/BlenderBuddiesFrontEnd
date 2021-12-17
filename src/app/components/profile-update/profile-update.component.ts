import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  // updateUser(name: string){
  //   console.log(name)
  //   this.http.get<any>(API_URL + 'users/{id}', { responseType: 'text' }).subscribe(data=>
  //   {
  //     this.user = data;
  //   })
  //    return this.http.post(AUTH_API + '/users', { email, password, firstname, lastname}, httpOptions);
  //   }
  // }

}
