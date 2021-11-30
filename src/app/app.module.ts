import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppUserModule} from "./app-user/app-user.module";
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppLivreurComponent } from './app-livreur/app-livreur.component';
import { SidenavComponent } from './app-shared/sidenav/sidenav.component';
import { TopnavComponent } from './app-shared/topnav/topnav.component';
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import { FormAddProviderComponent } from './app-provider/form-add-provider/form-add-provider.component';
import { MainStockComponent } from './app-stock/main-stock/main-stock.component';
import { FormAddStockComponent } from './app-stock/form-add-stock/form-add-stock.component';



@NgModule({
  declarations: [
    AppComponent,
    AppLivreurComponent,
    SidenavComponent,
    TopnavComponent,
    MainProviderComponent,
    FormAddProviderComponent,
    MainStockComponent,
    FormAddStockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUserModule,
    AppProductModule,
    AppSharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
