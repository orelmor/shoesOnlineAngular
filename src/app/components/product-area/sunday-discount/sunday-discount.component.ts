import { Component } from '@angular/core';

@Component({
  selector: 'app-sunday-discount',
  templateUrl: './sunday-discount.component.html',
  styleUrls: ['./sunday-discount.component.css']
})
export class SundayDiscountComponent {
 
  public isWednesday():boolean{
    const now = new Date()
    const day = now.getDay()
    return day === 3
 }
}
