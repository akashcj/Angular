import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  timer;
  counter:number = 0;
  timerStarted:boolean;
  @Output() timerEmit = new EventEmitter<number>();

  oddNumbers:number[]=[];
  evenNumbers:number[]=[];

  constructor() { 
    this.timerStarted=false;
  }

  ngOnInit() {
  }

  startTimer()
  {
    if(!this.timerStarted)
    {
      this.timerStarted=true;
      this.timer = setInterval(()=>{
        this.counter++; 
        this.timerEmit.emit(this.counter);
      },1000);
    }
  }

  stopTimer()
  {
    clearInterval(this.timer);
    this.timerStarted=false;
    this.counter = 0;
  }

}
