import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn:boolean;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then((isAuthenticated:boolean)=>{
      this.isLoggedIn = isAuthenticated;
    });
  }

  onLoadServer(id:number)
  {
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'true',fire:'false'},fragment:'loading'});
  }

  onLogin()
  {
    this.authService.login();
    this.isLoggedIn = true;
  }

  onLogout()
  {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
