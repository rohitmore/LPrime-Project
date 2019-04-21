import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material-module/material.module";
import { SearchBarComponent } from './nav-bar/search-bar/search-bar.component';
import { MenusDropdownComponent } from './nav-bar/menus-dropdown/menus-dropdown.component';
import { LoginModule } from "./login-module/login.module";
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { SharedModule } from "./common/shared.module";
import { ProductGridModule } from "./product-grid/product-grid.module";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("69858209272-f0h5q4h3fa402edpb4d2hph0cfm0t6cp.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1142485312601384")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    SearchBarComponent,
    MenusDropdownComponent,
    NavFooterComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FlexLayoutModule,
    LoginModule,
    SharedModule,
    ProductGridModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
