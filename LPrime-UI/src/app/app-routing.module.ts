import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import { CartComponent } from './common/components/cart/cart.component';

const routes: Routes = [
    { path : "", component : ProductListComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
