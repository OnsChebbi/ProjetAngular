import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { PanierRoutingModule } from './panier-routing.module';
import { MainPanierComponent } from './main-panier/main-panier.component';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { PanierComponent } from './panier/panier.component';
import { TestCartComponent } from './test-cart/test-cart.component';



@NgModule({
  declarations: [
    MainPanierComponent,
    DetailPanierComponent,
    PanierComponent,
    TestCartComponent
   
  ],
    imports: [
        BrowserModule,
        CommonModule,
        PanierRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class  PanierModule { }
