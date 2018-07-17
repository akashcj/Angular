import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { ICanLeaveEditServer } from './can-leave-edit-server.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ICanLeaveEditServer {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  changesSaved:boolean = false;

  constructor(private serversService: ServersService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.queryParams.subscribe(
      (queryParams:Params) => {
        if (queryParams['allowEdit'])
        {
          this.allowEdit = queryParams['allowEdit'] === 'true'?true:false;
        }
      }
    );
    this.activatedRoute.fragment.subscribe();
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
    this.changesSaved = true;
    
  }

  confirmEditServerLeave():Observable<boolean>|Promise<boolean>|boolean{

    if (this.allowEdit)
    {
      if (this.server.name != this.serverName || this.server.status != this.serverStatus){
        if (!this.changesSaved)
        {
          return confirm("Do you want to discard your changes?");
        }
      }
    }
    return true;
  }

}
