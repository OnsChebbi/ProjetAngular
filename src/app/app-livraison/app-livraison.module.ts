import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLivraisonComponent } from './main-livraison/main-livraison.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppLivraisonRoutingModule } from './app-livraison-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLivraisonComponent } from './form-livraison/form-livraison.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormLivraisonComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppLivraisonModule { }
