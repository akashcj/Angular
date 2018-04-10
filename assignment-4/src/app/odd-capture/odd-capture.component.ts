import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd-capture',
  templateUrl: './odd-capture.component.html',
  styleUrls: ['./odd-capture.component.css']
})
export class OddCaptureComponent implements OnInit, OnChanges {
  @Input() capturedValue:number;
  receivedValues:number[]=[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){
    let receivedValue:number = change.capturedValue.currentValue;
    if (receivedValue % 2 == 1)
    {
      this.receivedValues.push(receivedValue);
    }
  }

}
