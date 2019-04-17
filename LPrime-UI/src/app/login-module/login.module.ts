import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from "../material-module/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
      CommonModule,
      LoginRoutingModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class LoginModule { }
