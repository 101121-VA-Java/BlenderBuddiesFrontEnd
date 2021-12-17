import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    // this.currentUser = this.token.getUser();
  }

  redirProfileUpdate(){
    this.router.navigate(['profile-update']);
  }

}
