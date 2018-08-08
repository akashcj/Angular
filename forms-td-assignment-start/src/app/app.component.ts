import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formEl: NgForm;

  userData = {
    email: '',
    subscriptionType: '',
    password: ''
  };

  defaultSubscription = 'Advanced';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.formEl.value.email;
    this.userData.subscriptionType = this.formEl.value.subscriptionType;
    this.userData.password = this.formEl.value.password;
  }
}
