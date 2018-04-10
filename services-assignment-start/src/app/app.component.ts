import { Component, OnInit } from '@angular/core';
import { CounterService } from './Shared/counter.service';
import { UsersService } from './Shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {

  constructor(private counterService:CounterService, private usersService:UsersService){}
  counter:number[];

  ngOnInit()
  {
    this.counter = this.counterService.counter;
  }
}
