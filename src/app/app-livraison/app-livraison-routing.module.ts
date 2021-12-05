import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainLivraisonComponent } from './main-livraison/main-livraison.component';
import { FormLivraisonComponent } from './form-livraison/form-livraison.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'livraison', component: MainLivraisonComponent},
  {path:'add-livraison', component: FormLivraisonComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppLivraisonRoutingModule { }
