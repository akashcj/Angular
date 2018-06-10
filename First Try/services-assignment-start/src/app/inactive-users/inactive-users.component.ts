import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(index:number)
  {
    this.userService.setUserActive(index);
  }

}
