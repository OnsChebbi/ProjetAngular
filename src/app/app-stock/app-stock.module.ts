import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainStockComponent } from './main-stock/main-stock.component';
import { FormAddStockComponent } from './form-add-stock/form-add-stock.component';

@NgModule({
    declarations: [
     
      MainStockComponent,
      FormAddStockComponent,
      
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [],
      bootstrap: []
    })
    export class AppStockModule { }