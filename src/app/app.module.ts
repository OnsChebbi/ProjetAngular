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
import { MainPanierComponent } from './app-panier/main-panier/main-panier.component';
import { LivreurComponent } from './app-livreur/livreur/livreur.component';
import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';


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
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
