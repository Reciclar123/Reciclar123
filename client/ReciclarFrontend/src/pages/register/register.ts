import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationsProvider } from '../../providers/validations/validations';
import { TermsModalComponent } from '../../components/terms-modal/terms-modal';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private formSubmitAttempt: boolean;
  formGroup: FormGroup;
  isValidFormSubmitted = null;

  registerForm = {
    participantType: '',
    identification: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    terms: false,
    password: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public validProv: ValidationsProvider,
    public modalCtrl: ModalController) {

    const identificationValidators = [
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.required,
      Validators.pattern(this.validProv.NUMBER_REGEXP)
    ]

    this.formGroup = new FormGroup({
      participantType: new FormControl('', [Validators.required]),
      name: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ]),
      identification: new FormControl('', (this.registerForm.participantType === 'r') ? identificationValidators :  null),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.validProv.EMAIL_REGEXP)
      ]),
      address: new FormControl('', [
        Validators.minLength(10),
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern(this.validProv.NUMBER_REGEXP)
      ]),
      terms: new FormControl(false, [Validators.required, Validators.requiredTrue]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])
    });
  }

  submit() {
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

  showTerms() {
    console.log('showTerms');
    let profileModal = this.modalCtrl.create(TermsModalComponent);
    profileModal.present();
  }

}
