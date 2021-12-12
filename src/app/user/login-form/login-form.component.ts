import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User=new User();

  constructor(private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
