import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No new server was created';
  serverName='';
  servers = ['Test Server 1', 'TestServer 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit() {
  }

  onServerCreate(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'A new Server was created:' + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
