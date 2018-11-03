webpackJsonp([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonatePage = /** @class */ (function () {
    function DonatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.donationList = [];
        this.donationList.push({
            type: 'periodico',
            quantity: 2,
            unity: 'cajas',
            state: 'p',
            id: '',
        });
        this.donationList.push({
            type: 'papel',
            quantity: 5,
            unity: 'kg',
            state: 'p',
            id: '',
        });
    }
    DonatePage.prototype.goToDonationForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__["a" /* DonationFormPage */]);
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Donar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <div class="empty-message" *ngIf="donationList.length === 0">\n    <span>Aún no tienes registradas donaciones</span>\n  </div>\n\n  <div *ngIf="donationList.length > 0">\n    <ion-list *ngFor="let item of donationList">\n      <div class="container-list">\n        <ion-item style="width: 70%">\n          <b>{{item.type}}</b>\n          <br>\n          <b>Cantidad:</b> {{item.quantity}}\n          <br>\n          <b>Unidad:</b> {{item.unity}}\n          <br>\n          <b>Estado:</b> {{item.state}}\n        </ion-item>\n        <div style="width: 30%; background-color: white">\n          <button ion-button full color="blue-dark">\n            Editar\n          </button>\n          <button ion-button full style="background-color: red">\n            Eliminar\n          </button>\n        </div>\n      </div>\n      <button ion-button color="secondary" full> Entregar</button>\n    </ion-list>\n  </div>\n\n  <ion-footer>\n    <button ion-button full color="blue-dark" (click)="goToDonationForm()">\n      <span>Adicionar donación</span>\n    </button>\n  </ion-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], DonatePage);
    return DonatePage;
    var _a, _b;
}());

//# sourceMappingURL=donate.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_pass_reset_pass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validations_validations__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, request, loadingCtrl, validationsProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.loadingCtrl = loadingCtrl;
        this.validationsProv = validationsProv;
        this.userError = false;
        this.isValidFormSubmitted = null;
        this.loginForm = {
            username: '',
            password: ''
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])
        });
    }
    LoginPage.prototype.validateCredentials = function () {
        var userIsEmail = this.validationsProv.validateEmail(this.loginForm.username);
        var credentials = {
            password: this.loginForm.password
        };
        if (userIsEmail) {
            credentials.email = this.loginForm.username;
        }
        else {
            credentials.username = this.loginForm.username;
        }
        return credentials;
    };
    LoginPage.prototype.sendForm = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        loader.present();
        this.formSubmitAttempt = false;
        this.userError = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        var credentialData = this.validateCredentials();
        this.request.checklogin(credentialData).subscribe(function (data) {
            loader.dismiss();
            console.log('login success', data);
            _this.saveSessionUser(data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            _this.userError = true;
            console.log('login error', error);
        });
    };
    LoginPage.prototype.isFieldValid = function (field) {
        return (!this.formGroup.get(field).valid && this.formGroup.get(field).touched) ||
            (this.formGroup.get(field).untouched && this.formSubmitAttempt);
    };
    LoginPage.prototype.goToResetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_pass_reset_pass__["a" /* ResetPassPage */]);
    };
    LoginPage.prototype.saveSessionUser = function (data) {
        localStorage.setItem('id', data.id);
        localStorage.setItem('ttl', data.ttl.toString());
        localStorage.setItem('userId', data.userId);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title text-center>Ingresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <figure class="container-logo">\n    <img src="../../assets/imgs/logoApp.png" class="logo" alt="Logo App">\n  </figure>\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n\n    <ion-item>\n      <ion-label floating>Correo o número celular</ion-label>\n      <ion-input type="text" formControlName="username" [(ngModel)]="loginForm.username"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'username\')" errorMsg="Ingresa un usuario válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" formControlName="password" [(ngModel)]="loginForm.password" maxlength="20"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'password\')" errorMsg="La clave debe tener mínimo 6 y máximo 20 caracteres"></field-error-display>\n\n    <div class="container-logo">\n      <a (click)="goToResetPass()">¿Olvidaste tu clave?</a>\n    </div>\n\n    <div class="container-logo">\n      <field-error-display [displayError]="userError" errorMsg="Usuario o Clave Inválidos"></field-error-display>\n    </div>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="sendForm()" type="button" [disabled]="formGroup?.invalid">\n      Ingresar\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validations_validations__["a" /* ValidationsProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPassPage = /** @class */ (function () {
    function ResetPassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isValidFormSubmitted = null;
        this.loginForm = {
            user: ''
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            user: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)
            ])
        });
    }
    ResetPassPage.prototype.onFormSubmit = function () {
        this.formSubmitAttempt = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        console.log('form ok');
    };
    ResetPassPage.prototype.isFieldValid = function (field) {
        return (!this.formGroup.get(field).valid && this.formGroup.get(field).touched) ||
            (this.formGroup.get(field).untouched && this.formSubmitAttempt);
    };
    ResetPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reset-pass',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/reset-pass/reset-pass.html"*/'<ion-header>\n    <ion-navbar color="blue-dark">\n      <ion-title text-center>Recordar Datos</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="container">\n  \n    <figure class="container-logo">\n      <img src="../../assets/imgs/logoApp.png" class="logo" alt="Logo App">\n    </figure>\n  \n    <form [formGroup]="formGroup" novalidate class="register-form">\n  \n      <ion-item>\n        <ion-label floating>Correo o número celular</ion-label>\n        <ion-input type="text" formControlName="user" [(ngModel)]="loginForm.user"></ion-input>\n      </ion-item>\n      <field-error-display [displayError]="isFieldValid(\'user\')" errorMsg="Ingresa un usuario válido"></field-error-display>\n\n      <div class="container-note">\n        <p text-center>\n            Al solicitar recoradar clave, se enviará un mail con tu clave o un mensaje de texto a tu numero celular, según hayas puesto un\n            dato u otro.\n        </p>\n      </div>\n  \n      <button ion-button color="primary" full style="margin-top: 30px" (click)="submit()" type="button" [disabled]="formGroup.invalid">\n        Recordar Clave\n      </button>\n  \n    </form>\n  \n  </ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/reset-pass/reset-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResetPassPage);
    return ResetPassPage;
}());

//# sourceMappingURL=reset-pass.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validations_validations__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_terms_modal_terms_modal__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, validProv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validProv = validProv;
        this.modalCtrl = modalCtrl;
        this.isValidFormSubmitted = null;
        this.registerForm = {
            participantType: '',
            identification: '',
            name: '',
            email: '',
            address: '',
            phone: '',
            terms: false,
            password: ''
        };
        var identificationValidators = [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(12),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(this.validProv.NUMBER_REGEXP)
        ];
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            participantType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            identification: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', (this.registerForm.participantType === 'r') ? identificationValidators : null),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(this.validProv.EMAIL_REGEXP)
            ]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(this.validProv.NUMBER_REGEXP)
            ]),
            terms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](false, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].requiredTrue]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])
        });
    }
    RegisterPage.prototype.submit = function () {
        this.formSubmitAttempt = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        console.log('form ok');
    };
    RegisterPage.prototype.isFieldValid = function (field) {
        return (!this.formGroup.get(field).valid && this.formGroup.get(field).touched) ||
            (this.formGroup.get(field).untouched && this.formSubmitAttempt);
    };
    RegisterPage.prototype.showTerms = function () {
        console.log('showTerms');
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_terms_modal_terms_modal__["a" /* TermsModalComponent */]);
        profileModal.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n    <ion-list radio-group formControlName="participantType" [(ngModel)]="registerForm.participantType">\n      <ion-item>\n        <ion-label>Yo dono</ion-label>\n        <ion-radio value="d"></ion-radio>\n      </ion-item>\n      <div class="radio-description" *ngIf="registerForm.participantType === \'d\'">\n        <span>* Si separas tus residuos reciclables, quieres donarlos y obtener descuentos.</span>\n      </div>\n\n      <ion-item>\n        <ion-label>Yo Recojo</ion-label>\n        <ion-radio value="r"></ion-radio>\n      </ion-item>\n      <div class="radio-description" *ngIf="registerForm.participantType === \'r\'">\n        <span>* Si recibes material reciclable y puedes ir a recogerlo.</span>\n      </div>\n    </ion-list>\n\n    <ion-item class="item-margin-up">\n      <ion-label floating>Nombres y Apellidos</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="registerForm.name"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="registerForm.participantType === \'r\'">\n      <ion-label floating>Cédula de Ciudadania</ion-label>\n      <ion-input type="tel" formControlName="identification" [(ngModel)]="registerForm.identification" maxlength="12"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="email" formControlName="email" [(ngModel)]="registerForm.email" email placeholer="micorreo@email.com"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'email\')" errorMsg="Ingresa un correo válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Dirección</ion-label>\n      <ion-input type="text" formControlName="address" [(ngModel)]="registerForm.addres"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Celular</ion-label>\n      <ion-input type="tel" formControlName="phone" [(ngModel)]="registerForm.phone" maxlength="10"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'phone\')" errorMsg="Ingresa un número celular válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" formControlName="password" [(ngModel)]="registerForm.password" maxlength="20"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'password\')" errorMsg="La clave debe tener mínimo 6 y máximo 20 caracteres"></field-error-display>\n\n    <div class="check-container">\n      <ion-checkbox color="dark" formControlName="terms"></ion-checkbox>\n      <a (click)="showTerms()">Acepto Políticas</a>\n    </div>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="submit()" type="button" [disabled]="formGroup.invalid">\n      Guardar e Ingresar \n    </button>\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validations_validations__["a" /* ValidationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title text-center>Greenty</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <div>\n    <figure class="container-logo">\n      <img src="../../assets/imgs/logoApp.png" class="logo" alt="Logo App">\n    </figure>\n\n    <p class="text-logo">\n      Promociones por\n      <br>Reciclar\n    </p>\n  </div>\n\n  <div class="container-buttons">\n    <button ion-button full class="btn-registro btn-blue" (click)="goToRegister()">Regístrate</button>\n    <button ion-button full class="btn-ingresa btn-green" (click)="goToLogin()">Ingresa</button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/donate/donate.module": [
		286,
		12
	],
	"../pages/donation-form/donation-form.module": [
		291,
		7
	],
	"../pages/login/login.module": [
		287,
		11
	],
	"../pages/register/register.module": [
		288,
		10
	],
	"../pages/reset-pass/reset-pass.module": [
		289,
		9
	],
	"../pages/welcome/welcome.module": [
		290,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_environments__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestProvider = /** @class */ (function () {
    function RequestProvider(http) {
        this.http = http;
        console.log('Hello RequestProvider Provider');
    }
    RequestProvider.prototype.checklogin = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].loginMethod, credentials, {
            headers: headers
        });
    };
    RequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RequestProvider);
    return RequestProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProvider = /** @class */ (function () {
    function UserProvider() {
    }
    UserProvider.prototype.isLogin = function () {
        return localStorage.getItem('id') !== null &&
            localStorage.getItem('ttl') !== null &&
            localStorage.getItem('userId') !== null;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'field-error-display',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/components/field-error-display/field-error-display.html"*/'<div *ngIf="displayError" >\n  <div class="error-msg">\n    {{errorMsg}}\n  </div>\n</div>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/components/field-error-display/field-error-display.html"*/
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());

//# sourceMappingURL=field-error-display.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_validations_validations__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_field_error_display_field_error_display__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_terms_modal_terms_modal__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_pass_reset_pass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_request_request__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_donate_donate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_pass_reset_pass__["a" /* ResetPassPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__["a" /* DonationFormPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/donate/donate.module#DonatePageModule', name: 'DonatePage', segment: 'donate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pass/reset-pass.module#ResetPassPageModule', name: 'ResetPassPage', segment: 'reset-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-form/donation-form.module#DonationFormPageModule', name: 'DonationFormPage', segment: 'donation-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_pass_reset_pass__["a" /* ResetPassPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_donate_donate__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__["a" /* DonationFormPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_field_error_display_field_error_display__["a" /* FieldErrorDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_terms_modal_terms_modal__["a" /* TermsModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_validations_validations__["a" /* ValidationsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_request_request__["a" /* RequestProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    API_ENDPOINT: 'https://greenty.herokuapp.com/api',
    loginMethod: '/Users/login'
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usrPro) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.usrPro = usrPro;
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.usrPro.isLogin()) {
                console.log('usuario logeado');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */]);
            }
            // Yo dono
            _this.pages = [
                { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Ajustes', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Donar', component: __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__["a" /* DonatePage */] },
                { title: 'Locales', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Historico', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            ];
            // Yo recojo
            // this.pages = [
            //   { title: 'Inicio', component: HomePage },
            //   { title: 'Donaciones Publicadas', component: HomePage },
            //   { title: 'Tu lista de Donaciones', component: HomePage },
            //   { title: 'Recoger', component: HomePage },
            //   { title: 'Historico', component: HomePage },
            // ];
        });
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.initializeApp();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="blue-dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button class="btn-menu" menuClose ion-item (click)="logout()">\n        Salir\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_error_display_field_error_display__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_modal_terms_modal__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__field_error_display_field_error_display__["a" /* FieldErrorDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_4__terms_modal_terms_modal__["a" /* TermsModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__field_error_display_field_error_display__["a" /* FieldErrorDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_4__terms_modal_terms_modal__["a" /* TermsModalComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonationFormPage = /** @class */ (function () {
    function DonationFormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonationFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonationFormPage');
    };
    DonationFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donation-form',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Donación de Materiales</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], DonationFormPage);
    return DonationFormPage;
    var _a, _b;
}());

//# sourceMappingURL=donation-form.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        // Yo dono
        this.initialMessage = 'Con esta App podrás donar tus materiales reciclables y por ellos recibirás "gotas" que puedes cambiar por espectaculares promociones de nuestros patrocinadores.';
        this.urlVideo = 'https://www.youtube.com/embed/5-sWpFCN0C8';
        // Yo recojo
        // this.initialMessage = 'Con esta App podrás visualizar a donantes de material reciclable programar la recogida del material y evaluar su donación para entregar "gotas" como recompensa.';
        // this.urlVideo = 'https://www.youtube.com/embed/5q2HSdgO7CA';
        this.videoUrlSecure = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <h3 text-center>Bienvenido</h3>\n\n  <div class="initial-message">\n    <p>{{initialMessage}}</p>\n  </div>\n\n  <div class="container-video">\n      <iframe width="350" height="350" [src]="videoUrlSecure" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationsProvider = /** @class */ (function () {
    function ValidationsProvider() {
        this.EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.NUMBER_REGEXP = /^\d+$/;
    }
    ValidationsProvider.prototype.validateEmail = function (email) {
        return this.EMAIL_REGEXP.test(email);
    };
    ValidationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidationsProvider);
    return ValidationsProvider;
}());

//# sourceMappingURL=validations.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsModalComponent = /** @class */ (function () {
    function TermsModalComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    TermsModalComponent.prototype.closeTermsModal = function () {
        this.viewCtrl.dismiss();
    };
    TermsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'terms-modal',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/components/terms-modal/terms-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Politicas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button ion-button full (click)="closeTermsModal()">\n    Cerrar\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/components/terms-modal/terms-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], TermsModalComponent);
    return TermsModalComponent;
}());

//# sourceMappingURL=terms-modal.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map