export class CounterService{
    counter:number[] = [0];

    increment(){
        this.counter[0]++;
    }
}