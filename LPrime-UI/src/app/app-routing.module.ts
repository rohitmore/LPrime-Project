import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './checkout/cart/cart.component';
import {WishlistComponent} from "./wishlist/wishlist.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : HomeComponent},
    { path: 'cart', component: CartComponent },
    { path: 'wishlist', component: WishlistComponent },

    // Wild Route
    //{ path : "**", component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false} )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
