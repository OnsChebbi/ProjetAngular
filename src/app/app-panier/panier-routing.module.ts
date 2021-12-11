import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPanierComponent } from './detail-panier/detail-panier.component';
import { MainPanierComponent } from './main-panier/main-panier.component';
const routes: Routes = [
  {path: 'panier',component:MainPanierComponent},
  {path: 'panier/detail-panier/:id',component:DetailPanierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
