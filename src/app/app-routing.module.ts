import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { NotFoundComponent} from "./app-shared/not-found/not-found.component";
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {LivreurRoutingModule} from "./app-livreur/livreur-routing.module";
import {LandingPageRoutingModule} from "./landing-page/landing-page-routing.module";
import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch: 'full' },
  {path: 'provider',component: MainProviderComponent },
  {path: '**',component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppProductRoutingModule,
    UserRoutingModule,
    LivreurRoutingModule,
    LandingPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
