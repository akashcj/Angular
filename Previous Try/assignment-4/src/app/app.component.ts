import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lastReceivedNumber:number;

  onCounterElapsed(counter:{eventId:number}){
    this.lastReceivedNumber = counter.eventId;
  }
}
