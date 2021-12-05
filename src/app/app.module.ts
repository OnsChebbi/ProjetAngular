import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidenavComponent } from './app-shared/sidenav/sidenav.component';
import { TopnavComponent } from './app-shared/topnav/topnav.component';
import {UserModule} from "./user/user.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import { CommonModule } from '@angular/common';
import { MainPanierComponent } from './app-panier/main-panier/main-panier.component';
import { LivreurComponent } from './app-livreur/livreur/livreur.component';
import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';
import { MainLivraisonComponent } from './app-livraison/main-livraison/main-livraison.component';
import { FormLivraisonComponent } from './app-livraison/form-livraison/form-livraison.component';
import { LivreurRoutingModule } from './app-livreur/livreur-routing.module';
import { AppProviderModule } from './app-provider/app-provider.module';
import { AppStockModule } from './app-stock/app-stock.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    MainProviderComponent,
    FormAddProviderComponent,
    MainStockComponent,
    FormAddStockComponent,
    MainPanierComponent,
    LivreurComponent,
    MainLivreurComponent,
    FormLivreurComponent,
    MainLivraisonComponent,
    FormLivraisonComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppProductModule,
    AppStockModule,
    AppProviderModule,
    AppSharedModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    LivreurRoutingModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
