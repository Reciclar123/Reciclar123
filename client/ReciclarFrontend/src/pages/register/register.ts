import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationsProvider } from '../../providers/validations/validations';
import { TermsModalComponent } from '../../components/terms-modal/terms-modal';
import { RequestProvider } from '../../providers/request/request';
import { RegisterData, addressModel } from '../../models/register-data.model';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { DayTimes } from '../../models/enums/data.enum';


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
    public modalCtrl: ModalController,
    private requestProv: RequestProvider,
    public loadingCtrl: LoadingController,
    public request: RequestProvider,
    public userProv: UserProvider) {

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
      identification: new FormControl('', (this.registerForm.participantType === 'r') ? identificationValidators : null),
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

    const loader = this.loadingCtrl.create({
      content: ''
    });
    loader.present();

    const userAddress: addressModel = {
      address: this.registerForm.address,
      days: [
        {
          saturday: DayTimes.todoElDia
        }
      ]
    }

    const registerRequest: RegisterData = {
      cedula: this.registerForm.identification,
      ciudad: 'Bogotá',
      email: this.registerForm.email,
      gotas: 10,
      nombre: this.registerForm.name,
      password: this.registerForm.password,
      politicas: this.registerForm.terms,
      rol: this.registerForm.participantType,
      telefono: this.registerForm.phone,
      username: this.registerForm.phone,
      address: userAddress
    }

    this.requestProv.registerUser(registerRequest)
      .subscribe(data => {
        loader.dismiss();
        console.log('registerUser ', data);
        this.userProv.user = data;
        localStorage.setItem('tokenId', data.tokenId);
        this.request.generateUserData(data);
        this.navCtrl.setRoot(HomePage);
      }, error => {
        console.log('registerUser error ', error);
        loader.dismiss();
      });
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
