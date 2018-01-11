import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'main-app',
  templateUrl: 'user.component.html',
  styleUrls: ['../app.component.css']
})

export class userComponent {
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
