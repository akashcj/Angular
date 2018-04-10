import { CounterService } from "./counter.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService{  
    activeUsers:string[] = ['Max', 'Anna'];
    inactiveUsers:string[] = ['Chris', 'Manu'];

    // constructor(private counterService:CounterService){}
    constructor(private counterService:CounterService){}

    setUserInactive(id:number)
    {
        if (id < this.activeUsers.length)
        {
            //this will give only 1 user
            let inActivatedUsers:string[] = this.activeUsers.splice(id,1);
            this.inactiveUsers.push(inActivatedUsers[0]);
            this.counterService.increment();
        }
    }

    setUserActive(id:number)
    {
        if (id < this.inactiveUsers.length)
        {
            //this will give only 1 user
            let activatedUsers:string[] = this.inactiveUsers.splice(id,1);
            this.activeUsers.push(activatedUsers[0]);
            this.counterService.increment();
        }
    }
}