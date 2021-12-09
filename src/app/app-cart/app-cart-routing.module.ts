import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductTestComponent } from './product-test/product-test.component';

const routes: Routes = [
  {path: 'cart',component:CartComponent},
  {path: 'test-products',component:ProductTestComponent},

   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CartRoutingModule { }
  