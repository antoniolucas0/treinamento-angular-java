import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelInputComponent),
      multi: true
    }
  ]
})
export class LabelInputComponent implements ControlValueAccessor  {

  @Input()
  label: string = '';

  @Input()
  type = 'text' || 'email' || 'password';
  

  constructor() { }

  ngOnInit(): void {
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string = '';
  writeValue(input: string) {
    this.input = input;
  }

}
