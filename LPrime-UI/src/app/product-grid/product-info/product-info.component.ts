import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  images : [
      'https://cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025',
      'https://cdn.shopify.com/s/files/1/1047/6452/products/tricko1_1024x1024.jpg?v=1447104179',
      'https://cdn.shopify.com/s/files/1/1047/6452/products/tricko2_1024x1024.jpg?v=1447104180',
      'https://cdn.shopify.com/s/files/1/1047/6452/products/tricko3_1024x1024.jpg?v=1447104182'
    ];
  constructor() {

  }

  ngOnInit() {
  }

}
