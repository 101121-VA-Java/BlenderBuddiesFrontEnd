import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  smoothhiePage(){
    this.router.navigate(['smoothies']);
  }
}
