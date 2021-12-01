import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  list: User[];
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getListUserService().subscribe(
      (data:User[])=>this.list=data
    )
  }
  delete(user:User){
    let i =this.list.indexOf(user);
    this.userService.deleteUserService(user.id).subscribe(
      ()=>this.list.splice(i,1)
    )
  }
  ShowMore(user:User){
    this.userService.getUserServiceById(user.id).subscribe(
      (userF:User)=>[this.userService.MODUSer(userF),this.router.navigate(['/show-user'])]
    )
  }
  update(user:User){
    this.userService.UpdateUSer(user);
    this.router.navigate(['/add-user']);
  }

  AddUSer(){
    this.router.navigate(['/add-user'])
  }
}
