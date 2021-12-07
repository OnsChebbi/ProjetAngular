import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/model/user";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

@Input()listOfUsers:User[];
  constructor() { }

  ngOnInit(): void {
  }

}
