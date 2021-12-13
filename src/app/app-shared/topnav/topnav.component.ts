import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {window} from "rxjs/operators";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  Firstname:string="";
  LastName:string="";
  IsLogedIn:string="";
  idUser:number=null;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.IsLogedIn=localStorage.getItem('isloggedIn');
    if (this.IsLogedIn=='active'){
      this.Firstname=localStorage.getItem('loggedUserFirstName');
      this.LastName=localStorage.getItem('loggedUserLastName');
      this.idUser=Number(localStorage.getItem('loggedUserid'));
    }
    else if (this.IsLogedIn!='Notactive'){
      localStorage.setItem('isloggedIn','Notactive');
    }
  }

  Logout(){
    localStorage.removeItem('loggedUserid');
    localStorage.removeItem('loggedUserFirstName');
    localStorage.removeItem('loggedUserLastName');
    localStorage.removeItem('loggedUserRole');
    localStorage.setItem('isloggedIn','Notactive');
    location.reload();
    location.assign('/login');
  }

}
