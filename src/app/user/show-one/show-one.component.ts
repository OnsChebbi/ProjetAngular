import { Component, OnInit,Input} from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  constructor(private userService: UserService,private router: Router,private activated:ActivatedRoute) { }
  user:User;
  ngOnInit(): void {
    //this.user=this.userService.CurrentUser;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.userService.getUserServiceById(id).subscribe(
          (data) => this.user = data
        )
      }
    )
  }
  fixUser(){
    this.router.navigate(['/show-all-user']);
  }
}
