import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'signup',
    templateUrl: 'register.component.html',
    styleUrls: ['../app.component.css']
})

export class registerComponent {
    loginForm: FormGroup;
  public errorMsg = '';

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'remember': false,
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
    })
  }

  submitForm(value: any) {
    
  }
}
