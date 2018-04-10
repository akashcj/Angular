import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  @Output() counterElapsed = new EventEmitter<{eventId:number}>();
  timer = undefined;

  gameStatus:string = "Paused";
  currentCount:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onTimeout(){
    this.currentCount++;
    this.counterElapsed.emit({eventId:this.currentCount});
    
  }

  onPlayButtonPress(){
    this.timer = setInterval(()=>{this.onTimeout()},2000);
    this.gameStatus="Started" ;
  }

  onPauseButtonPress(){
    this.gameStatus="Paused";
    clearInterval(this.timer);
  }

}
