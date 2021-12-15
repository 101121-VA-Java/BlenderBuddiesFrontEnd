import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  get isAdmin() {
    let token = sessionStorage.getItem("token");

    return token != null && token.split(":")[1] === "ADMIN" ;
  }

  get isUser() {
    let token = sessionStorage.getItem("token");

    return token != null && token.split(":")[1] === "USER" ;
  }

  logout(): void {
    sessionStorage.clear();
  }
  
  ngOnInit(): void {
  }

}
