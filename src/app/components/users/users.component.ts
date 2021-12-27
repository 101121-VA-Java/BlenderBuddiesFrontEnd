import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  user: any;
  displayedColumns: string[] = ['User ID', 'First Name', 'Last Name', 'Username', 'Email', 'Role'];
  constructor(private authService: AuthService, private profileService: ProfileService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.profileService.getAllUsers().subscribe((response) => {
      this.users = response;
    }); 
  }

  updateSelectedUser(id: any) {
    let userId = parseInt(id.id);
    let currentUser = this.authService.getUser();

    if (userId != null && userId != currentUser && userId != 1) {
      const currentRoute = this.router.url;
      this.profileService.updateUserRole(userId)
        .subscribe(
          (response) => {
            this.user = response;
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['users']);
          }) 
        });
    }
  }

}
