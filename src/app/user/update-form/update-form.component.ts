import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user: User;
  constructor(private userService : UserService,private router: Router,private activated:ActivatedRoute) {  }

  ngOnInit(): void {
    //this.status=this.userService.status;
      this.activated.paramMap.subscribe(
        (params)=> {
          let id = params.get('id');
          this.userService.getUserServiceById(id).subscribe(
            (data) => this.user = data
          )
        }
      )
  }
  save(){

      this.userService.updateUserService(this.user).subscribe(
        ()=>this.router.navigate(['/show-all-user'])
      )
    }

      /*this.user.categorieUser='Fidele';
      this.user.role='Super_Admin';
      this.user.facture=[];
      this.user.avisUser=[];
      this.userService.addUserService(this.user).subscribe(
        ()=>this.router.navigate(['/show-all-user'])
      )*/

  return(){
    this.router.navigate(['/show-all-user']);
  }



}
