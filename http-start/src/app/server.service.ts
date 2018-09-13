import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private httpService: Http) { }

  saveServers(servers: any[]) {
    return this.httpService.post('https://akash-learning-ng.firebaseio.com/data.json', servers);
  }
}
