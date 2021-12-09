import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../core/model/user";
import {UserRole} from "../../core/model/UserRole";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  list: User[];
  listUser:UserRole[];
  userR:UserRole;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getListUserService().subscribe(
      (data:User[])=>[this.list=data]
    )

  }

}
