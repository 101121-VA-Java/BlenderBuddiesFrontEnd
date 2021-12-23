import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private authService: AuthService, private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.displayInfo()
  }

  profile?: any;

  displayInfo() {
    let id = this.authService.getUser();
    this.profileService.getUserById(id).subscribe((response) => {
      this.profile = response;
    });

  }

  updateUser(firstName: string, lastName: string, username: string, password: string, email: string) {
    let id = this.authService.getUser();
    if (id != null) {

      this.profileService.updateUser(id, firstName, lastName, username, password, email)
        .subscribe(
          (data) => {
            this.router.navigate(['profile']);
          });
    }
  }

}
