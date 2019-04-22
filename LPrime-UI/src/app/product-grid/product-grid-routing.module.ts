import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductGridComponent} from "./product-grid.component";

const routes: Routes = [
  { path : 'shop', component: ProductGridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGridRoutingModule { }
