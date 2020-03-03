import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

slides = [
  {img : "../assets/images/paracord.jpg"},
  {img : "../assets/images/paracord.jpg"},
 { img : "../assets/images/vongtay.png",},
 { img : "../assets/images/vongtay.png"},


];

slidesNav = [
  {img : "../assets/images/paracord.jpg"},
  {img : "../assets/images/paracord.jpg"},
 { img : "../assets/images/vongtay.png"},
 { img : "../assets/images/vongtay.png"},


];
 slideConfig = {
  slidesToShow:1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
}
// slideNav = {
//   slideToShow : 3,
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true,
//   asNavFor: '.slide-for',
//   slidesToScroll: 1,
// } 

  ngOnInit() {
  }

}
