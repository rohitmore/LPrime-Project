import {Directive, ElementRef, forwardRef, HostListener, Renderer2, Self} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: '[stringTrimmer]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringTrimmerDirective),
      multi: true,
    },
  ],
})
export class StringTrimmerDirective implements ControlValueAccessor {

  constructor(@Self() private ele: ElementRef, private renderer: Renderer2) {
    // console.log("inside directive");
    // console.log(ele);
    // ele.nativeElement.innerText = ele.nativeElement.innerText.trimLeft();
    // ele.nativeElement.innerText = ele.nativeElement.innerText.trimRight();
    // console.log("Data - " + ele.nativeElement.innerText);
    // renderer.setProperty(ele.nativeElement, "value",  ele.nativeElement.innerText.trim());
  }

  /** implements ControlValueAccessorInterface */
  _onChange: (_: any) => void;

  /** implements ControlValueAccessorInterface */
  _touched: () => void;


  @HostListener('blur', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    console.log("inside OnKeydown");
      const value = this.ele.nativeElement.value.trim();
      this.renderer.setProperty(this.ele.nativeElement, 'value', value);
      this._onChange(value);
      evt.preventDefault();
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.ele.nativeElement, 'disabled', isDisabled);
  }

  writeValue(value: any): void {
    console.log("Write Data - " + this.ele.nativeElement.innerText);
    console.log("value - " + this.ele.nativeElement.value);
    this.renderer.setProperty(this.ele.nativeElement, 'value', value);
  }
}

