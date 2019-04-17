import { Component, OnInit } from '@angular/core';
import * as consts from '../constants/string-constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  readonly constants = consts;

  constructor() { }

  ngOnInit() {
  }

}
