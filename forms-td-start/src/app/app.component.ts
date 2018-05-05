import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion='pet';
  defaultUsername='Your Name Here';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted:boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   UserData:{
    //     username:suggestedName,
    //   },
    //   email:'',
    //   secret:'',
    //   questionAnswer:'',
    //   gender:''
    // });

    this.signupForm.form.patchValue(
      {
        UserData:{
          username: suggestedName,
        }
      }
    );
  }

  // onSubmit(form:NgForm)
  // {
  //   console.log(form);
  // }

  onSubmit()
  {
    //copying all the values to the local object
    this.user.username = this.signupForm.value.UserData.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.submitted = true;
    console.log(this.signupForm);
  }
}
