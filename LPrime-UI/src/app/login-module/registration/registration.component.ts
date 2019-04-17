import { Component, OnInit } from '@angular/core';
import * as consts from "../../constants/string-constants";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', './../login/login.component.css']
})
export class RegistrationComponent implements OnInit {

  readonly constants = consts;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  contactNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[6-9]\\d{9}')
  ]);

  constructor() { }

  ngOnInit() {
  }

}
