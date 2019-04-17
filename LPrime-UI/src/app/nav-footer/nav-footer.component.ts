import { Component, OnInit } from '@angular/core';
import * as consts from './../constants/string-constants';
@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  readonly constants = consts;
  constructor() { }

  ngOnInit() {
  }

}
