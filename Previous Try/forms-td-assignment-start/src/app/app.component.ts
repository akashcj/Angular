import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") submissionForm:NgForm
  defaultSubscriptionType:string = 'advanced';
  formSubmitted:boolean = false;
  userSubmittedData = {
    email:'',
    subscriptionType:'',
    password:''
    
  }

  onSubmit()
  {
    this.formSubmitted = true;
    this.userSubmittedData.email = this.submissionForm.value.FormData.email;
    this.userSubmittedData.subscriptionType = this.submissionForm.value.FormData.subscriptionType;
    this.userSubmittedData.password = this.submissionForm.value.FormData.password;

    // console.log(this.submissionForm.value);
  }



}
