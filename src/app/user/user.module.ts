import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from './add-form/add-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowAllComponent } from './show-all/show-all.component';
import {BrowserModule} from "@angular/platform-browser";
import { ShowOneComponent } from './show-one/show-one.component';



@NgModule({
  declarations: [
    AddFormComponent,
    ShowAllComponent,
    ShowOneComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
