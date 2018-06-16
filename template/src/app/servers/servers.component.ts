import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreatedStatus:string = 'No server was created!!';
  serverName='';
  serverCreated:boolean=false;
  servers = ['Testserver1', 'TestServer2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreatedStatus = 'Server '+ this.serverName +' finally created!!!';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onTextChange(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
