import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResetPassPage } from '../reset-pass/reset-pass';
import { RequestProvider, ResponseUser } from '../../providers/request/request';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private formSubmitAttempt: boolean;
  private userError: boolean = false;
  formGroup: FormGroup;
  isValidFormSubmitted = null;

  loginForm = {
    username: '',
    password: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public request: RequestProvider,
    public loadingCtrl: LoadingController) {

    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])
    });
  }

  sendForm() {
    const loader = this.loadingCtrl.create({
      content: ''
    });
    loader.present();

    this.formSubmitAttempt = false;
    this.userError = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formSubmitAttempt = true;

    const credentials = {
      email: this.loginForm.username,
      username: this.loginForm.username,
      password: this.loginForm.password
    }

    this.request.checklogin(credentials).subscribe(data => {
      loader.dismiss();
      console.log('login success', data);
      this.saveSessionUser(data);
      this.navCtrl.setRoot(HomePage);
    },
      error => {
        loader.dismiss();
        this.userError = true;
        console.log('login error', error);
      })
  }

  isFieldValid(field: string) {
    return (!this.formGroup.get(field).valid && this.formGroup.get(field).touched) ||
      (this.formGroup.get(field).untouched && this.formSubmitAttempt);
  }

  goToResetPass() {
    this.navCtrl.push(ResetPassPage);
  }

  saveSessionUser(data: ResponseUser) {
    localStorage.setItem('id', data.id);
    localStorage.setItem('ttl', data.ttl.toString());
    localStorage.setItem('userId', data.userId);
  }

}
