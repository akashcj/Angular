import { EventEmitter } from "@angular/core";

export class CounterService{
    private activeToInactive:number = 0;
    private inactiveToActive:number = 0;

    activeToInactiveCounterUpdated = new EventEmitter<number>();
    InactiveToactiveCounterUpdated = new EventEmitter<number>();

    incrementActiveToInactiveCounter()
    {
        this.activeToInactive++;
        console.log("Active To Inactive Counter:" + this.activeToInactive);
        this.activeToInactiveCounterUpdated.emit(this.activeToInactive);

    }

    incrementInactiveToActiveCounter()
    {
        this.inactiveToActive++;
        console.log("Inactive To Active Counter:" + this.inactiveToActive);
        this.InactiveToactiveCounterUpdated.emit(this.inactiveToActive);
    }
}