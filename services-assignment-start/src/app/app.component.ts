import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  inactiveToActiveCounter:number = 0;
  activeToInactiveCounter:number = 0;

  constructor(private counterService:CounterService){}

  ngOnInit(){
    this.counterService.activeToInactiveCounterUpdated.subscribe(
      (value:number)=>{this.activeToInactiveCounter = value}
    );

    this.counterService.InactiveToactiveCounterUpdated.subscribe(
      (value:number)=>{this.inactiveToActiveCounter = value}
    )
  }
  
}
