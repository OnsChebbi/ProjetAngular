import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";

@Component({
  selector: 'app-add-admin-form',
  templateUrl: './add-admin-form.component.html',
  styleUrls: ['./add-admin-form.component.css']
})
export class AddAdminFormComponent implements OnInit {
  user:User=new User();

  constructor() { }

  ngOnInit(): void {
  }

}
