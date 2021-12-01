import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { NotFoundComponent} from "./app-shared/not-found/not-found.component";
import { AppLivreurComponent } from './app-livreur/app-livreur.component';
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {LandingPageRoutingModule} from "./landing-page/landing-page-routing.module";

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch: 'full' },
  {path: 'livreur',component: AppLivreurComponent },
  {path: 'provider',component: MainProviderComponent },
  {path: '**',component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppProductRoutingModule,
    UserRoutingModule,
    LandingPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
