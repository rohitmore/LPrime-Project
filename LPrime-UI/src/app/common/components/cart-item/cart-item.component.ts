import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartItems: Object[] = [
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': '../../../../assets/slider/image-1.jpg'},
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': '../../../../assets/slider/image-2.jpg'},
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': '../../../../assets/slider/image-3.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
