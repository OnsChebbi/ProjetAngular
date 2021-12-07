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
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import { FormAddProviderComponent } from './app-provider/form-add-provider/form-add-provider.component';
import { MainStockComponent } from './app-stock/main-stock/main-stock.component';
import { FormAddStockComponent } from './app-stock/form-add-stock/form-add-stock.component';
import {UserModule} from "./user/user.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import { CommonModule } from '@angular/common';
import { LivreurComponent } from './app-livreur/livreur/livreur.component';
import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';


import { MainLivraisonComponent } from './app-livraison/main-livraison/main-livraison.component';
import { FormLivraisonComponent } from './app-livraison/form-livraison/form-livraison.component';
import { AppLivraisonModule } from './app-livraison/app-livraison.module';
import { PanierModule } from './app-panier/panier.module';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    MainProviderComponent,
    FormAddProviderComponent,
    MainStockComponent,
    FormAddStockComponent,


    LivreurComponent,
    MainLivreurComponent,
    FormLivreurComponent,
    MainLivraisonComponent,
  

    LivreurComponent,
    MainLivreurComponent,
    FormLivreurComponent,
    MainLivraisonComponent,
  


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppProductModule,
    AppSharedModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    LandingPageModule,
    AppLivraisonModule,
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
