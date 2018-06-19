import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('inputServerContent') inputServerContent:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputServerName:HTMLInputElement) {
    this.serverAdded.emit({serverName:inputServerName.value, serverContent:this.inputServerContent.nativeElement.value});
  }

  onAddBlueprint(inputBlueprintName:HTMLInputElement) {
    this.blueprintAdded.emit(
      {
        serverName:inputBlueprintName.value, 
        serverContent:this.inputServerContent.nativeElement.value
      }
    );
  }

}
