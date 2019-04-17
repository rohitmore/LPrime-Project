import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser} from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})

export class LoginModuleComponent implements OnInit {

  constructor(private authService: AuthService) { }

  private user: SocialUser;
  private loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    console.log("inside Sing In Google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (userData) => {
      this.user = userData;
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
}