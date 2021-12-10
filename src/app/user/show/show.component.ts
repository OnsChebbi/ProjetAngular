import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

@Input()listOfUsers:User[];
@Input()role:string;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  delete(user:User){
    let i =this.listOfUsers.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>this.listOfUsers.splice(i,1)
    )
  }

  Block_UnBlock(user:User,role:string){
    let id : number;
    if (role=="SIMPLE"){
      id=2;
    }else if (role=="BLOCKED") {
      id=3;
    }
    let i = this.listOfUsers.indexOf(user);
    user.role[0].id=id;
    user.role[0].role=role;
    this.userService.changeRoleUser(user).subscribe(
      ()=>this.listOfUsers[i]=user
    )
  }


}
