import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-display',
  templateUrl: './toggle-display.component.html',
  styleUrls: ['./toggle-display.component.css']
})
export class ToggleDisplayComponent implements OnInit {
  buttonText = 'Show Paragraph';
  showParagraph = false;
  clickedTimes=[];
  i = 0;

  constructor() { }

  onButtonClick(){
    this.showParagraph = !this.showParagraph;
    if (this.showParagraph)
    {//The paragraph is visible
      this.buttonText = 'Hide Paragraph';
    }
    else
    {
      this.buttonText = 'Show Paragraph';
    }
    this.clickedTimes.push(Date());
  }

  useBlueWhiteClass(thing){
    return thing > 4? true : false;
  }

  ngOnInit() {
  }

}
