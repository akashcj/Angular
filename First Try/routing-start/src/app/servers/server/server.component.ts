import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  server: {id: number, name: string, status: string};

  @Input() selectedServerId:number = 1;

  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router ) { }

  updateServer(id:number)
  {
    this.server = this.serversService.getServer(+id);
    if (!this.server)
    {
      this.server = this.serversService.getServer(+this.selectedServerId);
    }

    if (!this.server)
    {
      this.server = this.serversService.getServer(1);
    }
  }

  ngOnInit() {
    this.updateServer(+this.route.snapshot.params['id']);

    this.route.params.subscribe(
       (params:Params)=>
      {
        this.updateServer(+params['id']);
      }
    );
  }

  ngOnChanges(change:SimpleChanges)
  {
    console.log("From changes");
    console.log(change);
    this.selectedServerId = change.selectedServerId.currentValue;
    this.updateServer(this.selectedServerId);
  } 

  onEdit()
  {
    // this.router.navigate(['/servers', this.server.id,'edit']);
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'});
  }

}
