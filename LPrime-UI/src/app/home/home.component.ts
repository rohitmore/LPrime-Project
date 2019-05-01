import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  images = [
    './../assets/slider/image-1.jpg',
    './../assets/slider/image-2.jpg',
    './../assets/slider/image-3.jpg',
  ];

  ngOnInit() {
  }

}
