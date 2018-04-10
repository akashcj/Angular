import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
  accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    statusUpdated:EventEmitter<string> = new EventEmitter<string>();

    constructor(private logger:LoggingService){}
 
    addAccount(name: string, status: string) {
      this.accounts.push({name,status});
      this.logger.logStatus(status);
    }
    
    updateStatus(id: number, newStatus: string) {
      this.accounts[id].status = newStatus;
      this.logger.logStatus(status);
      this.statusUpdated.emit(newStatus);
    }
    
}