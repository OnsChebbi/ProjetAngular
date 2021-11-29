import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainProviderComponent } from './main-provider/main-provider.component';
import { FormAddProviderComponent } from './form-add-provider/form-add-provider.component';

@NgModule({
    declarations: [
     
      MainProviderComponent,
      FormAddProviderComponent,
      
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [],
      bootstrap: []
    })
    export class AppProviderModule { }