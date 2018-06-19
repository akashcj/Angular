import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  onTimerEmit(value:number){
    if (value % 2 != 0)
    {
      this.oddNumbers.push(value);
    }
    else
    {
      this.evenNumbers.push(value);
    }
  }
}
