import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public pairAmount = 350
  public textToSearch = "Please search here"
  public bgColor= "white"

  public changeBackgroundColor(event:any):void{
    this.bgColor = event.target.value
  }

}
