import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked 
  {

    @Input('srvElement') element: {type:string, name:string, content:string};
    @Input() name:string;
    @ViewChild('heading') serverHeading:ElementRef;
    @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() { 
    console.log("constructor called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Text Content1:" + this.serverHeading.nativeElement.textContent);
    console.log("Text Content1:" + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  ngDoCheck(){
    console.log("ngDoCheck called!");
  }
  
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log("Text Content2:" + this.serverHeading.nativeElement.textContent);
    console.log("Text Content2:" + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentenViewInit(){

  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log("Text Content3:" + this.serverHeading.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called!");
  }

}
