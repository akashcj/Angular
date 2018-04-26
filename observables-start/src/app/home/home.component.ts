import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersSubscription:Subscription;
  customSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map(
      (data:number)=>{return data * 2;}
    );;

    this.numbersSubscription = myNumbers.subscribe(
      (receivedNumber:number)=>{
        console.log(receivedNumber);
      }
    );

    const myObservable = Observable.create((observer:Observer<string>)=>{
      setTimeout(() => {
        observer.next('First Packet');
      }, 2000);

      setTimeout(
        ()=>{
          observer.next('Second Packet');
        },4000);

      // setTimeout(()=>{
      //   observer.error('Error Packet');
      // },6000);

      setTimeout(
        ()=>{
          observer.complete();
        },6000);

        setTimeout(
          ()=>{
            observer.next('Third Packet');
          },8000);

    });

    this.customSubscription =  myObservable.subscribe(
      (data:string)=>{console.log(data)},
      (error:string)=>{console.log(error)},
      ()=>{console.log('complete')}
    );
  }

  ngOnDestroy(){
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }

}
