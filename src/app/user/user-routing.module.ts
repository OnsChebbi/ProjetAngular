import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateFormComponent} from "./update-form/update-form.component";
import {ShowAllComponent} from "./show-all/show-all.component";
import {ShowOneComponent} from "./show-one/show-one.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path:'show-all-user', component: ShowAllComponent},
  {path:'test-user', component: TestComponent},
  {path:'update-user/:id', component: UpdateFormComponent},
  {path:'user/:id', component: ShowOneComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
