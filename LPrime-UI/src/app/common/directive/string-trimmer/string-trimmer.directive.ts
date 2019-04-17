import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[stringTrimmer]'
})
export class StringTrimmerDirective {

  constructor(ele: ElementRef) {
    console.log("inside directive");
    console.log(ele);
    ele.nativeElement.innerText = ele.nativeElement.innerText.trimLeft();
    ele.nativeElement.innerText = ele.nativeElement.innerText.trimRight();
    console.log("Data - " + ele.nativeElement.innerText);
  }
}
