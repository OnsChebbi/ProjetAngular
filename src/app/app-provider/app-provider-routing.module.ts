import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainProviderComponent } from './main-provider/main-provider.component';
import { FormAddProviderComponent } from './form-add-provider/form-add-provider.component';
const routes: Routes = [
    {path: 'provider', component: MainProviderComponent
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppProviderRoutingModule { }
  