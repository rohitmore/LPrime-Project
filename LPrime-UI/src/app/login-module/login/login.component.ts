import { Component, OnInit } from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from "angularx-social-login";
import * as consts from './../../constants/string-constants';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  private user: SocialUser;
  private loggedIn: boolean;
  readonly constants = consts;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    console.log("inside Sign In Facebook");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then( (userData) => {
      this.user = userData;
    });
  }

  signInWithGoogle(): void {
    console.log("inside Sign In Google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (userData) => {
      this.user = userData;
    });
  }

  clicked() :void {
    console.log("inside Sign In");
    console.log("Data - " + this.passwordFormControl.value) ;
  }

  signOut(): void {
    this.authService.signOut();
  }

}
