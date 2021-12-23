import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
 
  constructor(private profileService: ProfileService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }

  redirProfileUpdate() {
    this.router.navigate(['profile-update']);
  }

  profile?: any
  getProfile(){
    let id = this.authService.getUser();
    this.profileService.getUserById(id).subscribe((response) => {
      this.profile = response;
    });
    
  }

}

