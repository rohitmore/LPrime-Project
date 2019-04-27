import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menus-dropdown',
  templateUrl: './menus-dropdown.component.html',
  styleUrls: ['./menus-dropdown.component.css']
})
export class MenusDropdownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
