import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';


const routes: Routes = [
  {path: 'liste-facture',component:ListeFactureComponent},
  


   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class FactureRoutingModule { }
  