import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];
  selectedId:number;

  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
    this.selectedId = 1;
  }

  updateSelectedId(id)
  {
    this.selectedId = id;
  }

}
