import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLivreurComponent } from './form-livreur/form-livreur.component';
import { LivreurComponent } from './livreur/livreur.component';
import { MainLivreurComponent } from './main-livreur/main-livreur.component';

const routes: Routes = [
  {path:'add-livreur', component: FormLivreurComponent},
  {path:'retrieve-all-livreurs', component: MainLivreurComponent},
  {path:'livreur/:id', component: LivreurComponent},
  {path:'livreur', component: MainLivreurComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
