import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainStockComponent } from './main-stock/main-stock.component';
import { FormAddStockComponent } from './form-add-stock/form-add-stock.component';
const routes: Routes = [
    {path: 'stock', component: MainStockComponent
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppStockRoutingModule { }
  