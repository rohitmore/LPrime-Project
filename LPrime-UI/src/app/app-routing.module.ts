import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WishlistComponent} from "./wishlist/wishlist.component";
import {HomeComponent} from "./home/home.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', component : HomeComponent},
    { path: 'checkout', component: CheckoutComponent },
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
