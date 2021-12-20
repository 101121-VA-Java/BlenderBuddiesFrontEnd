import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  currentUser?: any;

  constructor(private profileService: ProfileService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  updateUser(firstName: string, lastName: string, username: string, password: string, email: string){
    
    let currentUser = {username, password, firstName, lastName, email, role:'USER'}
    console.log(currentUser);
    
    return this.http.post(`${environment.API_URL}/users`, currentUser);
  }

}
