import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  User?: any;

  constructor(private authService: AuthService, private profileService: ProfileService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.displayInfo()
  }
  profile?: any
  displayInfo(){
    let id = this.authService.getUser();
    this.profileService.getUserById(id).subscribe((response) => {
      this.profile = response;
      console.log(this.profile);
    });
    
    
  }

  updateUser(firstName: string, lastName: string, username: string, password: string, email: string) {
    let id = this.authService.getUser();
    if (id != null) {

      this.profileService.updateUser(id, firstName, lastName, username, password, email)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['profile']);
          });
    }
  }

}
