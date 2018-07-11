import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let idValue:number = 1;
    if (this.activatedRoute.snapshot.params['id'])
    {
      idValue = parseInt(this.activatedRoute.snapshot.params['id']);
    }
    this.server = this.serversService.getServer(idValue);

    //subscribe to the param change event
    this.activatedRoute.params.subscribe(
      (params:Params) => {
        if (params['id'])
        {
          let idValue = parseInt(params['id']);
          this.server = this.serversService.getServer(idValue);
        }
      }
    );
  }

  onEdit()
  {
    this.router.navigate(['edit'], {relativeTo:this.activatedRoute});
  }

}
