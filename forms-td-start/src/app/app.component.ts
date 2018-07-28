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

  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.inputForm.form.patchValue({
      userData: {
        inputText: suggestedName
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
        inputText: '',
        inputEmail: '',
        },
        secret: 'pet',
        userAnswer: '',
        gender: 'male'
      }
    );
  }

  onSubmit() {
    console.log(this.inputForm);
  }
}
