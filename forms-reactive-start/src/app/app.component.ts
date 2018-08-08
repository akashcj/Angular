import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenNames = ['Anna', 'Chris'];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.isForbiddenName.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email], this.isForbiddenEmail)
      }),
      'gender':  new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe( (value) => {console.log(value); });
    this.signupForm.statusChanges.subscribe( (status) => {console.log(status); });
  }

  onAddHobby() {
    const newHobby = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(newHobby);
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  isForbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) >= 0) {
      // The entered name is in the list of forbidden names
      return {'isForbidden': true};
    }
    // No error. Name is not forbidden
    return null;
  }

  isForbiddenEmail(control: FormControl): Promise<any>|Observable<any> {
    return new Promise<any>( (resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'test@test.com') {
          resolve({'forbiddenEmail': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
