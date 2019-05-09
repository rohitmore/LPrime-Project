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
import {CheckoutComponent} from "./checkout.component";
import { PaymentComponent } from './payment/payment.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
        CartComponent,
        CartItemComponent,
        AddressComponent,
        AddEditAddressDialog,
        CheckoutComponent,
        PaymentComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule,
      SharedModule,
      FlexLayoutModule,
      CheckoutRoutingModule,
      HttpClientModule
  ],
  exports: [
    CartComponent,
    CartItemComponent,
    AddEditAddressDialog,
      CheckoutComponent
  ],
    entryComponents: [
        AddEditAddressDialog
    ]
})
export class CheckoutModule { }
