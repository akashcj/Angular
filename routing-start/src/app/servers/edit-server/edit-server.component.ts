import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  updateServerDetails(id:number)
  {
    console.log(this.serversService);
    this.server = this.serversService.getServer(+id);
    console.log(this.server);
    if (!this.server)
    {
      this.serversService.getServer(1);
    }
    console.log(this.server);
    if (this.server)
    {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }

  }

  ngOnInit() {
    this.updateServerDetails(+this.route.snapshot.params['id']);
    this.route.queryParams.subscribe((params:Params)=>{
      this.updateServerDetails(this.route.snapshot.params['id']);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
