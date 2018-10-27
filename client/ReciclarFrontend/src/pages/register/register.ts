import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  formGroup: FormGroup;
  participantType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.formGroup = new FormGroup({
			participantType: new FormControl('', [Validators.required])
		});	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
