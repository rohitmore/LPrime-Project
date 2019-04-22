import {NgModule} from '@angular/core';
import {StringTrimmerDirective} from "./directive/string-trimmer/string-trimmer.directive";
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "../material-module/material.module";

@NgModule({
  declarations: [
    StringTrimmerDirective,
    BackToTopComponent
  ],
  imports: [ BrowserModule, FormsModule, MaterialModule ],
  providers: [ ],
  exports: [
    StringTrimmerDirective,
    BackToTopComponent
  ]
})
export class SharedModule { }
