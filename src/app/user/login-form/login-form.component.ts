import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ModelUser} from "../../core/model/UserModels/ModelUser";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userModel:ModelUser=new ModelUser();
  user:User=new User();

  constructor(private router: Router,private activated:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
  }

  Authenticate(){
    this.userService.authenticate(this.userModel).subscribe(
      (data:User)=>{
        console.log(this.userModel)
        console.log(data);
      }
    )
  }
}
