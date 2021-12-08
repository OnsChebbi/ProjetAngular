import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { MainPanierComponent } from './main-panier/main-panier.component';
import { PanierComponent } from './panier/panier.component';
import { TestCartComponent } from './test-cart/test-cart.component';
const routes: Routes = [
  {path: 'panier',component:MainPanierComponent},
  {path: 'panier/detail-panier/:id',component:DetailPanierComponent},
  {path:'panier/panier-front-office',component:PanierComponent},
  {path:'panier/cart',component:TestCartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
