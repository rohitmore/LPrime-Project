import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import {SharedModule} from "../common/shared.module";
import {CartComponent} from "./cart/cart.component";
import {CartItemComponent} from "./cart-item/cart-item.component";
import {AddEditAddressDialog, AddressComponent} from './address/address.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material-module/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
        CartComponent,
        CartItemComponent,
        AddressComponent,
        AddEditAddressDialog
  ],
  imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule,
      SharedModule,
      FlexLayoutModule,
      CheckoutRoutingModule
  ],
  exports: [
    CartComponent,
    CartItemComponent,
    AddEditAddressDialog
  ],
    entryComponents: [
        AddEditAddressDialog
    ]
})
export class CheckoutModule { }
