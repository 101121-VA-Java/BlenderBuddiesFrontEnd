import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.profileService.getAllUsers().subscribe((response) => {
      this.users = response;
    }
    ); 
  }

}
