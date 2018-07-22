import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myIntervalSubscription: Subscription;
  myCustomSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myIntervalNumbers = interval(800).pipe(map(
      (data: number) => {
        return (data * 2);
      }
    ));

    this.myIntervalSubscription = myIntervalNumbers.subscribe(
      (value: number) => {
        console.log('Value Received:' + value);
      }
    );
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout( () => {
          observer.next('first package');
        }, 2000);
        setTimeout( () => {
          observer.next('Second package');
        }, 4000);
        setTimeout( () => {
          observer.complete();
        }, 5000);
        setTimeout( () => {
          observer.next('Third package');
        }, 5000);
      }
    );

    this.myCustomSubscription = myObservable.subscribe(
      (data: string) => {
        console.log('Got some data:' + data);
      },
      (errorData: string) => {
        console.log('Got an error:' + errorData);
      },
      () => {
        console.log('Event Completed.');
      }
    );

  }

  ngOnDestroy() {
    this.myCustomSubscription.unsubscribe();
    this.myIntervalSubscription.unsubscribe();
  }

}
