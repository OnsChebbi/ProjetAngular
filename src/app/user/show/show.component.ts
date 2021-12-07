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
    /*let i =this.list.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>this.list.splice(i,1)
    )*/
  }

}
