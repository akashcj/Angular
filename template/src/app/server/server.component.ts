import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    h3{
        color: green;
    }`]
})
export class ServerComponent{
    serverId:number = 15;
    serverStatus:string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}