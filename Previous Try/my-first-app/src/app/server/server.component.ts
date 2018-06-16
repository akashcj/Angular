import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color:white;
        }
    `]
})

export class ServerComponent{
    serverId = Math.floor(Math.random() * 10);
    serverStatus:string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getBackgroundColor(){
        return this.serverStatus == 'online' ? 'green': 'red';
    }
}