import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user: any;


  constructor(private profileService: ProfileService, private router: Router) {
    this.getUser();
   }

  ngOnInit(): void {
    // this.currentUser = this.token.getUser();
  }

  redirProfileUpdate() {
    this.router.navigate(['profile-update']);
  }

  getUser() {
    this.profileService.getProfile().subscribe((response: any) => {
      this.currentUser = response;
    })
  }

}
