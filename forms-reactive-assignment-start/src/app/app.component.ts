import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusList: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    /*Creating the form*/
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, this.isNameAllowed.bind(this)),
      'projectName': new FormControl(null, [Validators.required] , this.isNameAllowedAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  isNameAllowed(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'InvalidProjectName': true};
    }
    return (null);
  }

  isNameAllowedAsync(control: FormControl): Promise<any>|Observable<any> {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'Test') {
          resolve({'InvalidProjectNameAsync': true});
        }
        resolve(null);
      }, 1500);
    });
  }

}
