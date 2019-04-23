import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductGridComponent} from "./product-grid.component";
import {ProductInfoComponent} from "./product-info/product-info.component";

const routes: Routes = [
  { path : 'shop', component: ProductGridComponent},
  { path : 'shop/buy', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGridRoutingModule { }
