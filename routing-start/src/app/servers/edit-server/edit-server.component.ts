import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);
    // this.activatedRoute.queryParams.subscribe();
    // this.activatedRoute.fragment.subscribe();
    if (this.activatedRoute.snapshot.params['id'])
    {
      let idValue = parseInt(this.activatedRoute.snapshot.params['id']);
      this.server = this.serversService.getServer(idValue);
    }
    else    
    {
      this.server = this.serversService.getServer(1);
    }
    
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
