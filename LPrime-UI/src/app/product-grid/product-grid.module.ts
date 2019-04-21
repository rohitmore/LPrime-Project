import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import {ProductGridComponent} from "./product-grid.component";

@NgModule({
  declarations: [
      ProductGridComponent
  ],
  imports: [
    CommonModule,
    ProductGridRoutingModule
  ]
})
export class ProductGridModule { }
