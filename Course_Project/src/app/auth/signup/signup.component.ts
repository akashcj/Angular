import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onFormSubmit(f: NgForm) {
    // console.log(f.value.email);
    // console.log(f.value.password);
    this.authService.SignupUser(f.value.email, f.value.password);
  }

}
