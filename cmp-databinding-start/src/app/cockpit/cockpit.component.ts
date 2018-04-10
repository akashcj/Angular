import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //creating the required events
  @Output() serverAdded = new EventEmitter<{serverName:string, content:string}>();
  @Output() blueprintAdded = new EventEmitter<{blueprintName:string, blueprintContent:string}>();
  @ViewChild('serverContentInput') serverContent:ElementRef;

  // newServerName = '';
  newServerContent = '';

  onAddServer(nameInput:HTMLInputElement)
  {
    this.serverAdded.emit({serverName:nameInput.value, content: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement)
  {
    this.blueprintAdded.emit({blueprintName:nameInput.value,blueprintContent:this.serverContent.nativeElement.value});
  }

  constructor() { }

  ngOnInit() {
  }
  
  changeFirstElement()
  {

  }

  deleteFirstElement()
  {
    
  }

}
