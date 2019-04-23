import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import {ProductGridComponent} from "./product-grid.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../common/shared.module";
import {MaterialModule} from "../material-module/material.module";
import { ProductComponent } from './product/product.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
      ProductGridComponent,
      ProductComponent,
      SideFilterComponent,
      ProductInfoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    ProductGridRoutingModule
  ],
    exports: [
        ProductComponent
    ]
})
export class ProductGridModule { }
