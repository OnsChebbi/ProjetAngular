import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-admin-form',
  templateUrl: './add-admin-form.component.html',
  styleUrls: ['./add-admin-form.component.css']
})
export class AddAdminFormComponent implements OnInit {
  user:User=new User();

  constructor(private userService : UserService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(){
    this.user.categorieUser='CAT_ADM';
    this.user.profession='PROF_ADM';
    this.userService.addAdminUserService(this.user).subscribe(
      ()=>this.router.navigate(['/show-all-user'])
    )
    /*this.userService.changeRoleUser(this.user,'ADMIN').subscribe(
      ()=>this.router.navigate(['/show-all-user'])
    )*/
  }
  return(){
    this.router.navigate(['/show-all-user']);
  }
}
