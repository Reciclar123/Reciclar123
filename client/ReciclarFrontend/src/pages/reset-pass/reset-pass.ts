import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-reset-pass',
  templateUrl: 'reset-pass.html',
})
export class ResetPassPage {

  private formSubmitAttempt: boolean;
  formGroup: FormGroup;
  isValidFormSubmitted = null;

  loginForm = {
    user: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.formGroup = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  onFormSubmit() {
    this.formSubmitAttempt = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formSubmitAttempt = true;
    console.log('form ok')
  }

  isFieldValid(field: string) {
    return (!this.formGroup.get(field).valid && this.formGroup.get(field).touched) ||
      (this.formGroup.get(field).untouched && this.formSubmitAttempt);
  }

}
