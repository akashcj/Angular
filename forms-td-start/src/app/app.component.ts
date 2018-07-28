import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') inputForm: NgForm;
  answer = '';
  defaultQuestion = 'pet';
  submitted: boolean = false;

  genders: string[] = ['male', 'female'];

  user = {
    name: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.inputForm.form.patchValue({
      userData: {
        inputName: suggestedName
      }
    });
  }

  // onSubmit(form: ElementRef) {
  //   console.log(form);
  // }

  resetForm() {
    this.inputForm.setValue(
      {
        userData: {
        inputName: '',
        inputEmail: '',
        },
        secret: 'pet',
        userAnswer: '',
        gender: 'male'
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.user.name = this.inputForm.value.userData.inputName;
    this.user.email = this.inputForm.value.userData.inputEmail;
    this.user.secretQuestion = this.inputForm.value.secret;
    this.user.secretAnswer = this.inputForm.value.userAnswer;
    this.user.gender = this.inputForm.value.gender;

    this.inputForm.reset();
  }
}
