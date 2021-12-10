import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListeFactureComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppFactureModule { }
