import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'signup',
    templateUrl: 'register.component.html',
    styleUrls: ['../app.component.css']
})

export class registerComponent {
  registerForm: FormGroup;
  public errorMsg = '';

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.email],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
    })
    this.registerForm.get('email').setValidators(Validators.email);
  }

  submitForm(value: any) {
    
  }
}
