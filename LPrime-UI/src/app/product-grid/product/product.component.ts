import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material";
import * as consts from '../../constants/string-constants';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constants = consts;
  durationInSeconds = 15;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToWishList(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: this.durationInSeconds * 1000,
        panelClass: ['snack-bar']
      });
    }
  }
