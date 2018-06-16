import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret:boolean = false;
  buttonClicks=[];

  onButtonClick(){
    this.displaySecret = !this.displaySecret;
    this.buttonClicks.push("Button Clicked on " + new Date());
    // console.log(this.buttonClicks[this.buttonClicks.length - 1]);
  }

}
