import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'server', name: 'Test Name', content:'Test Content'},
    {type:'blueprint', name: 'Test Name2', content:'Test Content2'}
];

onServerAdded(serverData:{serverName:string, content:string}){
  this.serverElements.push(
    {type:'server', name:serverData.serverName, content:serverData.content}
  );
}

onBlueprintAdded(blueprintData:{blueprintName:string, blueprintContent:string}){
  this.serverElements.push(
    {type:'blueprint', name:blueprintData.blueprintName, content:blueprintData.blueprintContent}
  );
}

changeFirstElement()
{
  console.log("changeFirstElement called");
  this.serverElements[0].name="You have been changed!!!";
}

deleteFirstElement()
{
  this.serverElements.splice(0,1);
}
 
}
