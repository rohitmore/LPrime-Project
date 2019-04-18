import {NgModule} from '@angular/core';
import {StringTrimmerDirective} from "./directive/string-trimmer/string-trimmer.directive";

@NgModule({
  declarations: [
    StringTrimmerDirective
  ],
  imports: [ ],
  providers: [ ],
  exports: [
    StringTrimmerDirective
  ]
})
export class SharedModule { }
