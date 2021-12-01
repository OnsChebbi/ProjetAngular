import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  user: User;
  status:boolean;
  constructor(private userService : UserService,private router: Router) {  }

  ngOnInit(): void {
    this.status=this.userService.status;
    if (this.userService.status){
      this.user =  this.userService.CurrentUser;
    }else {
      this.user =  new User();
    }
  }
  save(){
    if (this.status){
      this.userService.updateUserService(this.user.id,this.user).subscribe(
        ()=>this.router.navigate(['/show-all-user'])
      )
    }
    else {
      this.user.accountCategory='Customer';
      this.userService.addUserService(this.user).subscribe(
        ()=>this.router.navigate(['/show-all-user'])
      )
    }
  }
  return(){
    this.router.navigate(['/show-all-user']);
  }

}
