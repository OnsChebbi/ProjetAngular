import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TestProductComponent } from './test-product/test-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppCartRoutingModule } from './app-cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    TestProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppCartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppCartModule { }
