import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', './../login/login.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
  }
}
