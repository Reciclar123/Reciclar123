webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_material_material__ = __webpack_require__(80);
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
    function DonatePage(navCtrl, navParams, materialProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.donationList = [];
        this.donationList = this.materialProv.getMaterialsInLocal();
    }
    DonatePage.prototype.goToDonationForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__["a" /* DonationFormPage */]);
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Donar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <div class="empty-message" *ngIf="donationList.length === 0">\n    <span>Aún no tienes registradas donaciones</span>\n  </div>\n\n  <div *ngIf="donationList.length > 0">\n    <ion-list *ngFor="let item of donationList">\n      <div class="container-list">\n        <ion-item style="width: 70%">\n          <b>{{ materialProv.getMaterialValuebyId(item.materialType) }}</b><br>\n          <b>Cantidad:</b> {{ item.quantity }}<br>\n          <b>Unidad:</b> {{ materialProv.getUnitiesValuebyId(item.unities) }}<br>\n          <b>Estado:</b> {{ materialProv.getMaterialStatesValuebyId(item.materialState) }}<br>\n          {{ item.materialDescription }}\n        </ion-item>\n        <div style="width: 30%; background-color: white">\n          <button ion-button full color="blue-dark">\n            Editar\n          </button>\n          <button ion-button full style="background-color: red">\n            Eliminar\n          </button>\n        </div>\n      </div>\n      <button ion-button color="secondary" full> Entregar</button>\n    </ion-list>\n  </div>\n\n  <ion-footer>\n    <button ion-button full color="blue-dark" (click)="goToDonationForm()">\n      <span>Adicionar donación</span>\n    </button>\n  </ion-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_material_material__["a" /* MaterialProvider */]])
    ], DonatePage);
    return DonatePage;
}());

//# sourceMappingURL=donate.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_material_material__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_static_data__ = __webpack_require__(166);
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
    function DonationFormPage(navCtrl, navParams, materialProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.isValidFormSubmitted = null;
        this.materialList = __WEBPACK_IMPORTED_MODULE_4__models_static_data__["a" /* MATERIALS */];
        this.UnitiesList = __WEBPACK_IMPORTED_MODULE_4__models_static_data__["c" /* UNITIES */];
        this.materialStatesList = __WEBPACK_IMPORTED_MODULE_4__models_static_data__["b" /* MATERIAL_STATES */];
        this.materialData = {
            materialType: '',
            quantity: 1,
            unities: '',
            materialState: '',
            materialDescription: ''
        };
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            materialType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            unities: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            materialState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            materialDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    }
    DonationFormPage.prototype.saveMaterial = function () {
        console.log('materialData', this.materialData);
        this.formSubmitAttempt = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        this.materialProv.setMaterialInLocal(this.materialData);
        this.navCtrl.pop();
    };
    DonationFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donation-form',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Registro de Materiales</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Lista de materiales</ion-label>\n        <ion-select formControlName="materialType" [(ngModel)]="materialData.materialType">\n          <div *ngFor="let mat of materialList">\n              <ion-option value="{{mat.id}}">{{mat.name}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Cantidad</ion-label>\n      <ion-input type="number" formControlName="quantity" [(ngModel)]="materialData.quantity"></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Unidades</ion-label>\n        <ion-select formControlName="unities" [(ngModel)]="materialData.unities">\n          <div *ngFor="let unit of UnitiesList">\n              <ion-option value="{{unit.id}}">{{unit.name}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Estado del material</ion-label>\n        <ion-select formControlName="materialState" [(ngModel)]="materialData.materialState">\n          <div *ngFor="let state of materialStatesList">\n              <ion-option value="{{state.id}}">{{state.name}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label floating>Descripción</ion-label>\n      <ion-textarea class="text-area" formControlName="materialDescription" [(ngModel)]="materialData.materialDescription"></ion-textarea>\n    </ion-item>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="saveMaterial()" type="button" [disabled]="formGroup.invalid">\n      Guardar \n    </button>\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_material_material__["a" /* MaterialProvider */]])
    ], DonationFormPage);
    return DonationFormPage;
}());

//# sourceMappingURL=donation-form.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_pass_reset_pass__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validations_validations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(42);
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
    function LoginPage(navCtrl, navParams, request, loadingCtrl, validationsProv, userProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = request;
        this.loadingCtrl = loadingCtrl;
        this.validationsProv = validationsProv;
        this.userProv = userProv;
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
            _this.userProv.user = data;
            _this.request.generateUserData(data);
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title text-center>Ingresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <figure class="container-logo">\n    <img src="../../assets/imgs/logoApp.png" class="logo" alt="Logo App">\n  </figure>\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n\n    <ion-item>\n      <ion-label floating>Correo o número celular</ion-label>\n      <ion-input type="text" formControlName="username" [(ngModel)]="loginForm.username"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'username\')" errorMsg="Ingresa un usuario válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" formControlName="password" [(ngModel)]="loginForm.password" maxlength="20"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'password\')" errorMsg="La clave debe tener mínimo 6 y máximo 20 caracteres"></field-error-display>\n\n    <div class="container-logo">\n      <a (click)="goToResetPass()">¿Olvidaste tu clave?</a>\n    </div>\n\n    <div class="container-logo">\n      <field-error-display [displayError]="userError" errorMsg="Usuario o Clave Inválidos"></field-error-display>\n    </div>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="sendForm()" type="button" [disabled]="formGroup?.invalid">\n      Ingresar\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validations_validations__["a" /* ValidationsProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validations_validations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_terms_modal_terms_modal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(42);
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
    function RegisterPage(navCtrl, navParams, validProv, modalCtrl, requestProv, loadingCtrl, userProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validProv = validProv;
        this.modalCtrl = modalCtrl;
        this.requestProv = requestProv;
        this.loadingCtrl = loadingCtrl;
        this.userProv = userProv;
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
        var _this = this;
        this.formSubmitAttempt = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        var loader = this.loadingCtrl.create({
            content: ''
        });
        loader.present();
        var registerRequest = {
            cedula: this.registerForm.identification,
            ciudad: 'Bogotá',
            email: this.registerForm.email,
            gotas: 10,
            nombre: this.registerForm.name,
            password: this.registerForm.password,
            politicas: this.registerForm.terms,
            rol: this.registerForm.participantType,
            telefono: this.registerForm.phone,
            username: this.registerForm.phone
        };
        this.requestProv.registerUser(registerRequest)
            .subscribe(function (data) {
            loader.dismiss();
            console.log('registerUser ', data);
            _this.userProv.user = data;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.log('registerUser error ', error);
            loader.dismiss();
        });
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
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

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/donate/donate.module": [
		289,
		5
	],
	"../pages/donation-form/donation-form.module": [
		291,
		4
	],
	"../pages/login/login.module": [
		290,
		3
	],
	"../pages/register/register.module": [
		292,
		2
	],
	"../pages/reset-pass/reset-pass.module": [
		293,
		1
	],
	"../pages/welcome/welcome.module": [
		294,
		0
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATERIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UNITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MATERIAL_STATES; });
var MATERIALS = [
    { id: '01', name: 'Mixto (Si no quieres ponerte a separarlos y diferenciar que tienes)' },
    { id: '02', name: 'Papel: Periódico/Cartón /Plegadiza/Archivo/Envasesy tetrapack/Cuadernos y libretas' },
    { id: '03', name: 'Periódico' },
    { id: '04', name: 'Cartón' },
    { id: '05', name: 'Plegadiza' },
    { id: '06', name: 'Archivo' },
    { id: '07', name: 'Envases y Tetrapack' },
    { id: '08', name: 'Cuadernos y libretas' },
    { id: '09', name: 'Vidrió: Botellas/ Frascos' },
    { id: '10', name: 'Botellas o frascos de vidrio transparente' },
    { id: '11', name: 'Botellas o frascos de vidrio café' },
    { id: '12', name: 'Botellas o frascos de vidrio verde' },
    { id: '13', name: 'Botellas o frascos de vidrio azul' },
    { id: '14', name: 'Otros de vidrio' },
    { id: '15', name: 'Metál: Latas/Chatarra/Viruta' },
    { id: '16', name: 'Latas de enlatados' },
    { id: '17', name: 'Latas de bebidas' },
    { id: '18', name: 'Chatarra' },
    { id: '19', name: 'Viruta de metal' },
    { id: '20', name: 'Otros elementos de metal' },
    { id: '21', name: 'Plástico: Botellas/Empaques/Tapas/bolsas' },
    { id: '22', name: 'Botellas y frascos de plastico (Tucos)' },
    { id: '23', name: 'Empaques plasticos' },
    { id: '24', name: 'Tapas plasticas' },
    { id: '25', name: 'Bolsas' },
    { id: '26', name: 'Otros elementos plásticos' },
    { id: '27', name: 'Telas' },
    { id: '28', name: 'Equipos electrónicos' },
    { id: '29', name: 'cartuchos de tinta y tóner' }
];
var UNITIES = [
    { id: '01', name: 'kg  estimados' },
    { id: '02', name: 'm3 estimados' },
    { id: '03', name: 'Caja pequeña (hasta 25cm de alto)' },
    { id: '04', name: 'Caja mediana (hasta de 50 cm de alto)' },
    { id: '05', name: 'Caja grande (de más de 50 cm de alto)' },
    { id: '06', name: 'Bolsa pequeña (hasta 25cm de alto)' },
    { id: '07', name: 'Bolsa mediana (hasta de 50 cm de alto)' },
    { id: '08', name: 'Bolsa grande (de más de 50 cm de alto)' }
];
var MATERIAL_STATES = [
    { id: '01', name: 'limpio/húmedo' },
    { id: '02', name: 'limpio/seco' },
    { id: '03', name: 'Sucio/húmedo' },
    { id: '04', name: 'Sucio/seco' }
];
//# sourceMappingURL=static-data.js.map

/***/ }),

/***/ 210:
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

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_validations_validations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_field_error_display_field_error_display__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_terms_modal_terms_modal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_pass_reset_pass__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_request_request__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_donate_donate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_material_material__ = __webpack_require__(80);
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
                        { loadChildren: '../pages/donation-form/donation-form.module#DonationFormPageModule', name: 'DonationFormPage', segment: 'donation-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pass/reset-pass.module#ResetPassPageModule', name: 'ResetPassPage', segment: 'reset-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_material_material__["a" /* MaterialProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    API_ENDPOINT: 'https://greenty.herokuapp.com/api',
    loginMethod: '/Persons/login',
    registerMethod: '/Persons'
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_request_request__ = __webpack_require__(41);
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
    function MyApp(platform, statusBar, splashScreen, requestPro, usrPro) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.requestPro = requestPro;
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
            // observable para user
            _this.requestPro.$obsUser.subscribe(function (data) {
                _this.userData = data;
                _this.setMenuOptions();
            });
            if (_this.usrPro.isLogin()) {
                console.log('usuario logeado');
                _this.userData = _this.usrPro.user;
                _this.setMenuOptions();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */]);
            }
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
    MyApp.prototype.setMenuOptions = function () {
        if (this.userData.rol === 'd') {
            // Yo dono
            this.pages = [
                { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Ajustes', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Donar', component: __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__["a" /* DonatePage */] },
                { title: 'Locales', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Historico', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            ];
        }
        else if (this.userData.rol === 'r') {
            // Yo recojo
            this.pages = [
                { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Donaciones Publicadas', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Tu lista de Donaciones', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Recoger', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Historico', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            ];
        }
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
            __WEBPACK_IMPORTED_MODULE_8__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_error_display_field_error_display__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_modal_terms_modal__ = __webpack_require__(83);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_environments__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
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
        // Se crea un subject para instanciar un observable
        this.subjUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.$obsUser = this.subjUser.asObservable();
        console.log('Hello RequestProvider Provider');
    }
    // metodo para disparar el observable de config
    RequestProvider.prototype.generateUserData = function (data) {
        this.subjUser.next(data);
    };
    RequestProvider.prototype.checklogin = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].loginMethod, credentials, {
            headers: headers
        });
    };
    RequestProvider.prototype.registerUser = function (userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].registerMethod, userData, {
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

/***/ 42:
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
    Object.defineProperty(UserProvider.prototype, "user", {
        get: function () {
            if (this._user)
                return this._user;
            else {
                var tempo = JSON.parse(localStorage.getItem('user'));
                this._user = tempo;
                return tempo;
            }
        },
        set: function (us) {
            localStorage.setItem('user', JSON.stringify(us));
            this._user = us;
        },
        enumerable: true,
        configurable: true
    });
    UserProvider.prototype.isLogin = function () {
        return localStorage.getItem('user') !== null;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(41);
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
    function HomePage(navCtrl, sanitizer, userProv, requestPro) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.userProv = userProv;
        this.requestPro = requestPro;
        this.user = this.userProv.user;
        if (this.userProv.user.rol === 'd') {
            // Yo dono
            this.initialMessage = 'Con esta App podrás donar tus materiales reciclables y por ellos recibirás "gotas" que puedes cambiar por espectaculares promociones de nuestros patrocinadores.';
            this.urlVideo = 'https://www.youtube.com/embed/5-sWpFCN0C8';
        }
        else if (this.userProv.user.rol === 'r') {
            // Yo recojo
            this.initialMessage = 'Con esta App podrás visualizar a donantes de material reciclable programar la recogida del material y evaluar su donación para entregar "gotas" como recompensa.';
            this.urlVideo = 'https://www.youtube.com/embed/5q2HSdgO7CA';
        }
        this.videoUrlSecure = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
    }
    HomePage.prototype.checkMenuOptions = function () {
        this.requestPro.generateUserData(this.user);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <h3 text-center>Bienvenido</h3>\n\n  <div class="initial-message">\n    <p>{{initialMessage}}</p>\n  </div>\n\n  <div class="container-video">\n      <iframe width="350" height="350" [src]="videoUrlSecure" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_static_data__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialProvider = /** @class */ (function () {
    function MaterialProvider(http) {
        this.http = http;
        console.log('Hello MaterialProvider Provider');
    }
    MaterialProvider.prototype.getMaterialsInLocal = function () {
        var mat = JSON.parse(localStorage.getItem('materials'));
        console.log('materials', mat);
        this._materials = mat;
        if (this._materials === undefined || this._materials === null) {
            this._materials = [];
        }
        return this._materials;
    };
    MaterialProvider.prototype.setMaterialInLocal = function (mat) {
        this._materials = this.getMaterialsInLocal();
        this._materials.push(mat);
        localStorage.setItem('materials', JSON.stringify(this._materials));
    };
    MaterialProvider.prototype.setMaterialsInLocal = function (materials) {
        this._materials = materials;
        localStorage.setItem('materials', JSON.stringify(materials));
    };
    MaterialProvider.prototype.getMaterialValuebyId = function (id) {
        var material = '';
        __WEBPACK_IMPORTED_MODULE_2__models_static_data__["a" /* MATERIALS */].map(function (mat) {
            if (mat.id === id)
                material = mat.name;
        });
        return material;
    };
    MaterialProvider.prototype.getMaterialStatesValuebyId = function (id) {
        var stateName = '';
        __WEBPACK_IMPORTED_MODULE_2__models_static_data__["b" /* MATERIAL_STATES */].map(function (state) {
            if (state.id === id)
                stateName = state.name;
        });
        return stateName;
    };
    MaterialProvider.prototype.getUnitiesValuebyId = function (id) {
        var unityName = '';
        __WEBPACK_IMPORTED_MODULE_2__models_static_data__["c" /* UNITIES */].map(function (unity) {
            if (unity.id === id)
                unityName = unity.name;
        });
        return unityName;
    };
    MaterialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], MaterialProvider);
    return MaterialProvider;
    var _a;
}());

//# sourceMappingURL=material.js.map

/***/ }),

/***/ 82:
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

},[211]);
//# sourceMappingURL=main.js.map