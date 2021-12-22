import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private authService: AuthService, private profileService: ProfileService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.profileService.getAllUsers().subscribe((response) => {
      this.users = response;
    }); 
  }

  updateSelectedUser(id: number, role: string) {
    if (id != null) {

      this.profileService.updateUserRole(id, role)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['users']);
          });
    }
  }

}
