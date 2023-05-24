import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public shoes = [
    {code:1, brand:"Adidas", color: "red and white strips", price: 250},
    {code:2, brand:"Adidas", color: "red and blue strips", price: 250},
    {code:3, brand:"Puma", color: "dotted black", price: 540},
    {code:4, brand:"Asics", color: "double stripped red", price: 365}
  ]
}
