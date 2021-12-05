import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainProductComponent} from "./main-product/main-product.component";
import {ShowAllProductComponent} from "./show-all-product/show-all-product.component";
import {ShowOneComponent} from "../user/show-one/show-one.component";
import {AddFormComponent} from "../user/add-form/add-form.component";
import {FormProductComponent} from "./form-product/form-product.component";
const routes: Routes = [
  {path: 'product', component: ShowAllProductComponent},

  {path:'add-product', component: FormProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppProductRoutingModule { }
