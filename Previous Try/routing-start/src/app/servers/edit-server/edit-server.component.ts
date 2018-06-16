import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Observable } from 'rxjs/Observable';
import { CanComponentDeactivateInterface } from './edit-server-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivateInterface {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  updateSaved = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  updateServerDetails(id:number)
  {
    this.server = this.serversService.getServer(+id);

    if (!this.server)
    {
      this.serversService.getServer(1);
    }
    if (this.server)
    {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }

  }

  ngOnInit() {
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1'?true:false;
    console.log("allowEdit in edit-server:",this.allowEdit);
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1'?true:false;
        console.log("allowEdit in edit-server:",this.allowEdit);
      }
    );

    this.updateServerDetails(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params:Params)=>{
      this.updateServerDetails(+params['id']);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, 
      {name: this.serverName, status: this.serverStatus});
      this.updateSaved = true;
  }

  canDeactivate():Promise<boolean>|Observable<boolean>|boolean{
    if (!this.allowEdit)
    {
      return true;
    }
    if ((this.serverName != this.server.name || this.serverStatus != this.server.status) && (!this.updateSaved))
    {
      return confirm('Discard Changes?');
    }
    else
    {
      return true;
    }
  }

}
