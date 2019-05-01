import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartItems: Object[] = [
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': 'https://cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025'},
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': 'https://cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025'},
    { 'itemName': 'Moda Rapido Men Maroon Printed Round Neck T-shirt', 'price': 800, 'image': 'https://cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
