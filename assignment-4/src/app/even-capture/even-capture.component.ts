import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even-capture',
  templateUrl: './even-capture.component.html',
  styleUrls: ['./even-capture.component.css']
})
export class EvenCaptureComponent implements OnInit {

  @Input() capturedValue:number;
  receivedValues:number[]=[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    let receivedValue:number = change.capturedValue.currentValue;
    if (receivedValue % 2 == 0)
    {
      this.receivedValues.push(receivedValue);
    }
  }

}
