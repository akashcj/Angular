import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService:UsersService){}

  ngOnInit(){
    this.usersService.activateUserSubject.subscribe(
      (data:number)=>{
        console.log("Received ID:" + data);
        if (data === 1){
          this.user1Activated = true;
          console.log("User 1 Activated");
        }
        else if (data === 2){
          this.user2Activated = true;
          console.log("User 2 Activated");
        }
      }
    );
  }

}
