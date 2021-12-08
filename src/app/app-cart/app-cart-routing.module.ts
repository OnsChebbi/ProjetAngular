import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';
import { TestProductComponent } from './test-product/test-product.component';
const routes: Routes = [
    {path: 'cart',component:CartComponent},
    {path: 'test-product',component:TestProductComponent},



];
@NgModule({
    imports: [RouterModule.forRoot(routes),
      CommonModule,
      BrowserModule,
      HttpClientModule],
    exports: [RouterModule]
  })
  export class AppCartRoutingModule { }
  