import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private httpService: Http) { }

  saveServers(servers: any[]) {
    const header: Headers = new Headers({ 'Content-type': 'application/json'});
    return this.httpService.post('https://akash-learning-ng.firebaseio.com/data.json',
       servers,
       {headers: header});
  }
}
