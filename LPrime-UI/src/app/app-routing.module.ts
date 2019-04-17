import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginModuleComponent} from "./login-module/login-module.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
    { path : "", component : ProductListComponent},
    { path : "callback", component : LoginModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
