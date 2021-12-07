import {Component, Input, OnInit} from '@angular/core';
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
  new_list:User[];
  constructor(private userService: UserService,private router: Router) { }
  role:string='Simple';
  ngOnInit(): void {
    this.userService.getListUserService().subscribe(
      (data:User[])=>this.list=data
    )
  }
  delete(user:User){
    let i =this.list.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>this.list.splice(i,1)
    )
  }

 /* update(user:User){
    //this.stauts='update';
    localStorage.setItem('statusUpdateUser','update');
    localStorage.setItem('IdUser',String(user.idUser))
    //this.userService.UpdateUSer(user);
    this.router.navigate(['/add-user/']);
  }*/

  AddUSer(){
    this.router.navigate(['/add-user'])
  }

  TargetSimpleUser(){
    this.new_list=this.list.filter(user=>user.role==='Simple_User'||user.role==='Client'||user.role==='Blocked');
  }
  TargetAdminUser(){
    this.new_list=this.list.filter(user=>user.role==='Super_Admin'||user.role==='Admin');
  }
  TargetAll(){
    this.new_list=this.list;
  }
}
