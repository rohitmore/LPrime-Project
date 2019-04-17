import { Component, OnInit } from '@angular/core';
import * as consts from '../constants/string-constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  readonly constants = consts;
  flags = {
    showMenuDropDown : false,
    classActive: false
  };

  constructor() { }

  ngOnInit() {
  }

  changeMenuDropdownVisibility (state) {
    this.flags.showMenuDropDown = state;
    this.flags.classActive = state;
  }



}
