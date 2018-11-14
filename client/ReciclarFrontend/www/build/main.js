webpackJsonp([11],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryDonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_qr_delivery_qr__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeliveryDonationPage = /** @class */ (function () {
    function DeliveryDonationPage(navCtrl, navParams, materialProv, userProv, request) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.userProv = userProv;
        this.request = request;
        this.donationList = [];
        this.materialsIdSelected = [];
        this._user = this.userProv.user;
        this.materialsIdSelected = [];
        console.log('initial materialsIdSelected', this.materialsIdSelected);
        this.materialProv.getMyMaterials().subscribe(function (data) {
            _this.donationList = data;
            console.log('donationList', data);
        }, function (error) {
            console.log(error);
        });
    }
    DeliveryDonationPage.prototype.toggleMaterials = function (materialId) {
        console.log('materialsIdSelected ', this.materialsIdSelected);
        console.log('materialId ', materialId);
        var index = this.materialsIdSelected.indexOf(materialId);
        console.log('index', index);
        if (index === -1) {
            this.materialsIdSelected.push(materialId);
        }
        else {
            this.materialsIdSelected.splice(index, 1);
        }
        console.log('final materialsIdSelected', this.materialsIdSelected);
    };
    DeliveryDonationPage.prototype.deliveryMaterial = function () {
        var _this = this;
        var delMaterial = {
            personId: this._user.address[0].personId,
            materiales: this.materialsIdSelected
        };
        this.request.deliveryMaterials(delMaterial).subscribe(function (data) {
            console.log('deliveryMaterials', data);
            localStorage.setItem('deliveryId', data.id);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__delivery_qr_delivery_qr__["a" /* DeliveryQrPage */], { qrId: data.id });
        });
    };
    DeliveryDonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delivery-donation',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/delivery-donation/delivery-donation.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seleccionar donación</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <div class="register-form">\n\n    <ion-list *ngFor="let item of donationList">\n      <div class="container-list">\n        <div class="check-container">\n          <ion-checkbox checked="false" (ionChange)="toggleMaterials(item.id)"></ion-checkbox>\n        </div>\n        <ion-item style="width: 80%">\n          <b>{{ materialProv.getMaterialValuebyId(item.tipoId) }}</b>\n          <br>\n          <b>Cantidad:</b> {{ item.cantidad }}\n          <br>\n          <b>Unidad:</b> {{ materialProv.getUnitiesValuebyId(item.tipoId, item.unidadId) }}\n          <br>\n          <b>Estado:</b> {{ item.estado }}\n          <br> {{ item.descripcion }}\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="deliveryMaterial()" type="button" [disabled]="materialsIdSelected.length === 0">\n      Entregar materiales seleccionados\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/delivery-donation/delivery-donation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */]])
    ], DeliveryDonationPage);
    return DeliveryDonationPage;
}());

//# sourceMappingURL=delivery-donation.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryQrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qrcode__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qrcode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliveryQrPage = /** @class */ (function () {
    function DeliveryQrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var qrId = this.navParams.get('qrId');
        console.log('qrId', qrId);
        this.generateQR(qrId);
    }
    DeliveryQrPage.prototype.generateQR = function (qrId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_qrcode___default.a.toDataURL(qrId)
            .then(function (url) {
            _this.urlQR = url;
            console.log(url);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    DeliveryQrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-delivery-qr',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/delivery-qr/delivery-qr.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Entregar Donación</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <ion-card>\n    <div class="qr-message">\n      "Yo recojo" escanea su código QR y obtiene la información sobre lo que usted le esta entregando y así le entrega sus puntos,\n      de acuerdo a lo entregado.\n    </div>\n\n    <div class="qr-container">\n      <img [src]="urlQR" alt="QRCode" align="center" />\n    </div>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/delivery-qr/delivery-qr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DeliveryQrPage);
    return DeliveryQrPage;
}());

//# sourceMappingURL=delivery-qr.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_static_data_static_data__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donate_donate__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(22);
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
    function DonationFormPage(navCtrl, navParams, materialProv, request, userProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.request = request;
        this.userProv = userProv;
        this.formSubmitAttempt = false;
        this.isValidFormSubmitted = null;
        this.updateMaterial = false;
        this.materialTypeList = [];
        this.UnitiesList = [];
        this.materialStatesList = __WEBPACK_IMPORTED_MODULE_4__models_static_data_static_data__["a" /* MATERIAL_STATES */];
        this.materialData = {
            tipoId: '',
            cantidad: 1,
            unidadId: '',
            estado: '',
            descripcion: '',
            personId: '',
            addressRecoleccionId: ''
        };
        this.user = this.userProv.user;
        this.request.getMaterialTypes().subscribe(function (data) {
            console.log('materialTypeList', data);
            _this.materialTypeList = data;
            if (navParams.get('material')) {
                _this.updateMaterial = true;
                _this.materialData = navParams.get('material');
                var mat = _this.materialTypeList.filter(function (mat) { return (mat.id === _this.materialData.tipoId); });
                console.log('mat', mat);
                _this.updateUnities(mat[0]);
            }
            _this.materialData.personId = _this.user.address[0].personId;
            _this.materialData.addressRecoleccionId = _this.user.address[0].id;
        });
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            materialType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            unities: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            materialState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            materialDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
    }
    DonationFormPage.prototype.updateUnities = function (material) {
        console.log(material);
        this.UnitiesList = material.unidades;
        console.log(this.UnitiesList);
    };
    DonationFormPage.prototype.saveMaterial = function () {
        console.log('materialData', this.materialData);
        this.formSubmitAttempt = false;
        if (this.formGroup.invalid) {
            return;
        }
        this.formSubmitAttempt = true;
        if (this.updateMaterial) {
            this.materialProv.saveMaterial(this.materialData);
        }
        else {
            this.materialProv.updateMaterial(this.materialData);
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__donate_donate__["a" /* DonatePage */]);
    };
    DonationFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donation-form',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Registro de Materiales</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Lista de materiales</ion-label>\n        <ion-select formControlName="materialType" [(ngModel)]="materialData.tipoId" interface="action-sheet">\n          <div *ngFor="let mat of materialTypeList">\n              <ion-option value="{{mat.tipoId}}" (ionSelect)="updateUnities(mat)">{{mat.descripcion}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cantidad</ion-label>\n        <ion-input type="number" formControlName="quantity" [(ngModel)]="materialData.cantidad"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>Unidades</ion-label>\n        <ion-select formControlName="unities" [(ngModel)]="materialData.unidadId" interface="action-sheet">\n          <div *ngFor="let unit of UnitiesList">\n              <ion-option value="{{unit.id}}">{{unit.descripcion}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Estado del material</ion-label>\n        <ion-select formControlName="materialState" [(ngModel)]="materialData.estado" interface="action-sheet">\n          <div *ngFor="let state of materialStatesList">\n              <ion-option value="{{state.name}}">{{state.name}}</ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Descripción</ion-label>\n        <ion-textarea formControlName="materialDescription" [(ngModel)]="materialData.descripcion"></ion-textarea>\n      </ion-item>\n\n  </ion-list>\n  \n  <ion-footer>\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="saveMaterial()" type="button" [disabled]="formGroup.invalid">\n      Guardar \n    </button>\n  </ion-footer>  \n\n    \n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donation-form/donation-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_material_material__["a" /* MaterialProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], DonationFormPage);
    return DonationFormPage;
}());

//# sourceMappingURL=donation-form.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationsPublishedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donations_published_details_donations_published_details__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DonationsPublishedPage = /** @class */ (function () {
    function DonationsPublishedPage(navCtrl, navParams, materialProv, userProv, request) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.userProv = userProv;
        this.request = request;
        this.allMaterialsList = [];
        this._user = this.userProv.user;
        this.materialProv.getAllMaterials().subscribe(function (data) {
            _this.allMaterialsList = data;
            console.log('allMaterialsList', data);
        }, function (error) {
            console.log(error);
        });
    }
    DonationsPublishedPage.prototype.goToDetails = function (material) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__donations_published_details_donations_published_details__["a" /* DonationsPublishedDetailsPage */], { material: material });
    };
    DonationsPublishedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donations-published',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donations-published/donations-published.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Donaciones publicadas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="container">\n\n    <ion-list>\n        <div *ngFor="let item of allMaterialsList">\n          <ion-item text-wrap (click)="goToDetails(item)">\n            <b>{{ materialProv.getMaterialValuebyId(item.tipoId) }}</b>\n            <br>\n            <b>Cantidad:</b> {{ item.cantidad }}\n            <br>\n            <b>Unidad:</b> {{ materialProv.getUnitiesValuebyId(item.tipoId, item.unidadId) }}\n            <br>\n            <b>Estado:</b> {{ item.estado }} <br>\n            {{ item.descripcion }}\n          </ion-item>\n        </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donations-published/donations-published.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */]])
    ], DonationsPublishedPage);
    return DonationsPublishedPage;
}());

//# sourceMappingURL=donations-published.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationsPublishedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request_request__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DonationsPublishedDetailsPage = /** @class */ (function () {
    function DonationsPublishedDetailsPage(navCtrl, navParams, materialProv, request) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.request = request;
        this.material = this.navParams.get('material');
        this.getMaterialAddress(this.material.personId, this.material.addressRecoleccionId);
    }
    DonationsPublishedDetailsPage.prototype.getMaterialAddress = function (personId, addressId) {
        var _this = this;
        this.request.getAddressByPersonId(personId).subscribe(function (data) {
            data.map(function (addr) {
                if (addr.id === addressId) {
                    _this.addressMaterial = addr.address;
                }
            });
        });
    };
    DonationsPublishedDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donations-published-details',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donations-published-details/donations-published-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="container">\n  <ion-item text-wrap>\n    <b>{{ materialProv.getMaterialValuebyId(material.tipoId) }}</b>\n    <br>\n    <b>Cantidad:</b> {{ material.cantidad }}\n    <br>\n    <b>Unidad:</b> {{ materialProv.getUnitiesValuebyId(material.tipoId, material.unidadId) }}\n    <br>\n    <b>Estado:</b> {{ material.estado }} <br>\n    {{ material.descripcion }} <br>\n    <b>Dirección:</b> {{ addressMaterial }} <br>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donations-published-details/donations-published-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_material_material__["a" /* MaterialProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_request_request__["a" /* RequestProvider */]])
    ], DonationsPublishedDetailsPage);
    return DonationsPublishedDetailsPage;
}());

//# sourceMappingURL=donations-published-details.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_pass_reset_pass__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validations_validations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(22);
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
            localStorage.setItem('tokenId', data.tokenId);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validations_validations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_terms_modal_terms_modal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_enums_data_enum__ = __webpack_require__(298);
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
    function RegisterPage(navCtrl, navParams, validProv, modalCtrl, requestProv, loadingCtrl, request, userProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validProv = validProv;
        this.modalCtrl = modalCtrl;
        this.requestProv = requestProv;
        this.loadingCtrl = loadingCtrl;
        this.request = request;
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
        var userAddress = {
            address: this.registerForm.address,
            days: [
                {
                    saturday: __WEBPACK_IMPORTED_MODULE_8__models_enums_data_enum__["a" /* DayTimes */].todoElDia
                }
            ]
        };
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
            username: this.registerForm.phone,
            address: userAddress
        };
        this.requestProv.registerUser(registerRequest)
            .subscribe(function (data) {
            loader.dismiss();
            console.log('registerUser ', data);
            _this.userProv.user = data;
            localStorage.setItem('tokenId', data.tokenId);
            _this.request.generateUserData(data);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <form [formGroup]="formGroup" novalidate class="register-form">\n    <ion-list radio-group formControlName="participantType" [(ngModel)]="registerForm.participantType">\n      <ion-item>\n        <ion-label>Yo dono</ion-label>\n        <ion-radio value="d"></ion-radio>\n      </ion-item>\n      <div class="radio-description" *ngIf="registerForm.participantType === \'d\'">\n        <span>* Si separas tus residuos reciclables, quieres donarlos y obtener descuentos.</span>\n      </div>\n\n      <ion-item>\n        <ion-label>Yo Recojo</ion-label>\n        <ion-radio value="r"></ion-radio>\n      </ion-item>\n      <div class="radio-description" *ngIf="registerForm.participantType === \'r\'">\n        <span>* Si recibes material reciclable y puedes ir a recogerlo.</span>\n      </div>\n    </ion-list>\n\n    <ion-item class="item-margin-up">\n      <ion-label floating>Nombres y Apellidos</ion-label>\n      <ion-input type="text" formControlName="name" [(ngModel)]="registerForm.name"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="registerForm.participantType === \'r\'">\n      <ion-label floating>Cédula de Ciudadania</ion-label>\n      <ion-input type="tel" formControlName="identification" [(ngModel)]="registerForm.identification" maxlength="12"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="email" formControlName="email" [(ngModel)]="registerForm.email" email placeholer="micorreo@email.com"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'email\')" errorMsg="Ingresa un correo válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Dirección</ion-label>\n      <ion-input type="text" formControlName="address" [(ngModel)]="registerForm.address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Celular</ion-label>\n      <ion-input type="tel" formControlName="phone" [(ngModel)]="registerForm.phone" maxlength="10"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'phone\')" errorMsg="Ingresa un número celular válido"></field-error-display>\n\n    <ion-item>\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" formControlName="password" [(ngModel)]="registerForm.password" maxlength="20"></ion-input>\n    </ion-item>\n    <field-error-display [displayError]="isFieldValid(\'password\')" errorMsg="La clave debe tener mínimo 6 y máximo 20 caracteres"></field-error-display>\n\n    <div class="check-container">\n      <ion-checkbox color="dark" formControlName="terms"></ion-checkbox>\n      <a (click)="showTerms()">Acepto Políticas</a>\n    </div>\n\n    <button ion-button color="primary" full style="margin-top: 30px" (click)="submit()" type="button" [disabled]="formGroup.invalid">\n      Guardar e Ingresar \n    </button>\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validations_validations__["a" /* ValidationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* RequestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="container">\n\n  <div class="initial-message">\n    <p>\n        En este menú se tendrá la opción de establecer días de la semana y horarios de recolección en los que el donante esté dispuesto\n        a entregar, también podrá adicionar nuevas direcciones y configurarlas.\n    </p>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(117);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <ion-title text-center>Greenty</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <div>\n    <figure class="container-logo">\n      <img src="../../assets/imgs/logoApp.png" class="logo" alt="Logo App">\n    </figure>\n\n    <p class="text-logo">\n      Promociones por\n      <br>Reciclar\n    </p>\n  </div>\n\n  <ion-footer>\n    <button ion-button full class="btn-registro btn-blue" (click)="goToRegister()">Regístrate</button>\n    <button ion-button full class="btn-ingresa btn-green" (click)="goToLogin()">Ingresa</button>\n  </ion-footer>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_environments__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(22);
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
    function RequestProvider(http, userProv) {
        this.http = http;
        this.userProv = userProv;
        // Se crea un subject para instanciar un observable
        this.subjUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.$obsUser = this.subjUser.asObservable();
        this._user = this.userProv.user;
        console.log('this._user', this._user);
        this.ACCESS_TOKEN = '?access_token=' + localStorage.getItem('tokenId');
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
    RequestProvider.prototype.getMaterialTypes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].materialTypeMethod, {
            headers: headers
        });
    };
    RequestProvider.prototype.getMyMaterials = function () {
        console.log(this._user);
        var userId = this._user.personId;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + '/Persons/' + userId + '/materiales' + this.ACCESS_TOKEN, {
            headers: headers
        });
    };
    RequestProvider.prototype.saveMaterial = function (material) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].materialMethod + this.ACCESS_TOKEN, material, {
            headers: headers
        });
    };
    RequestProvider.prototype.updateMaterial = function (material) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].materialMethod + this.ACCESS_TOKEN, material, {
            headers: headers
        });
    };
    RequestProvider.prototype.deleteMaterial = function (materialId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].materialMethod + '/' + materialId + this.ACCESS_TOKEN, {
            headers: headers
        });
    };
    RequestProvider.prototype.deliveryMaterials = function (delMaterials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].recyclingsMethod + this.ACCESS_TOKEN, delMaterials, {
            headers: headers
        });
    };
    RequestProvider.prototype.getAllMaterials = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].materialMethod + '?filter[where][status]=publicado', {
            headers: headers
        });
    };
    RequestProvider.prototype.getAddressByPersonId = function (personId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].API_ENDPOINT + __WEBPACK_IMPORTED_MODULE_2__config_environments__["a" /* ENV */].registerMethod + '/' + personId + '/address', {
            headers: headers
        });
    };
    RequestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserProvider */]])
    ], RequestProvider);
    return RequestProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/delivery-donation/delivery-donation.module": [
		325,
		10
	],
	"../pages/delivery-qr/delivery-qr.module": [
		326,
		9
	],
	"../pages/donate/donate.module": [
		327,
		8
	],
	"../pages/donation-form/donation-form.module": [
		328,
		7
	],
	"../pages/donations-published-details/donations-published-details.module": [
		330,
		6
	],
	"../pages/donations-published/donations-published.module": [
		329,
		5
	],
	"../pages/login/login.module": [
		331,
		4
	],
	"../pages/register/register.module": [
		332,
		3
	],
	"../pages/reset-pass/reset-pass.module": [
		333,
		2
	],
	"../pages/settings/settings.module": [
		334,
		1
	],
	"../pages/welcome/welcome.module": [
		335,
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
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
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
            if (this._user) {
                return this._user;
            }
            else {
                var tempUsr = JSON.parse(localStorage.getItem('user'));
                this._user = tempUsr;
                return tempUsr;
            }
        },
        set: function (us) {
            if (us.addressPerson) {
                us.address = us.addressPerson;
            }
            localStorage.setItem('user', JSON.stringify(us));
            var tempUsr = JSON.parse(localStorage.getItem('user'));
            this._user = tempUsr;
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

/***/ 223:
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_validations_validations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_field_error_display_field_error_display__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_terms_modal_terms_modal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_pass_reset_pass__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_donate_donate__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_delivery_donation_delivery_donation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_delivery_qr_delivery_qr__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_donations_published_donations_published__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_donations_published_details_donations_published_details__ = __webpack_require__(116);
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
                __WEBPACK_IMPORTED_MODULE_20__pages_donation_form_donation_form__["a" /* DonationFormPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_delivery_donation_delivery_donation__["a" /* DeliveryDonationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_delivery_qr_delivery_qr__["a" /* DeliveryQrPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_donations_published_donations_published__["a" /* DonationsPublishedPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_donations_published_details_donations_published_details__["a" /* DonationsPublishedDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/delivery-donation/delivery-donation.module#DeliveryDonationPageModule', name: 'DeliveryDonationPage', segment: 'delivery-donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery-qr/delivery-qr.module#DeliveryQrPageModule', name: 'DeliveryQrPage', segment: 'delivery-qr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donate/donate.module#DonatePageModule', name: 'DonatePage', segment: 'donate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-form/donation-form.module#DonationFormPageModule', name: 'DonationFormPage', segment: 'donation-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donations-published/donations-published.module#DonationsPublishedPageModule', name: 'DonationsPublishedPage', segment: 'donations-published', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donations-published-details/donations-published-details.module#DonationsPublishedDetailsPageModule', name: 'DonationsPublishedDetailsPage', segment: 'donations-published-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-pass/reset-pass.module#ResetPassPageModule', name: 'ResetPassPage', segment: 'reset-pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_field_error_display_field_error_display__["a" /* FieldErrorDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_terms_modal_terms_modal__["a" /* TermsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_delivery_donation_delivery_donation__["a" /* DeliveryDonationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_delivery_qr_delivery_qr__["a" /* DeliveryQrPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_donations_published_donations_published__["a" /* DonationsPublishedPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_donations_published_details_donations_published_details__["a" /* DonationsPublishedDetailsPage */]
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    API_ENDPOINT: 'https://greenty.herokuapp.com/api',
    loginMethod: '/Persons/login',
    registerMethod: '/Persons',
    materialTypeMethod: '/TiposMaterial',
    materialMethod: '/Materials',
    recyclingsMethod: '/Recyclings'
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MATERIALS */
/* unused harmony export UNITIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATERIAL_STATES; });
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayTimes; });
/* unused harmony export DonationStatus */
var DayTimes;
(function (DayTimes) {
    DayTimes["manana"] = "Ma\u00F1ana";
    DayTimes["tarde"] = "Tarde";
    DayTimes["todoElDia"] = "Todo el d\u00EDa";
})(DayTimes || (DayTimes = {}));
var DonationStatus;
(function (DonationStatus) {
    DonationStatus["publicado"] = "publicado";
    DonationStatus["programado"] = "programado";
    DonationStatus["entregado"] = "entregado";
})(DonationStatus || (DonationStatus = {}));
//# sourceMappingURL=data.enum.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_donations_published_donations_published__ = __webpack_require__(115);
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
                { title: 'Ajustes', component: __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */] },
                { title: 'Donar', component: __WEBPACK_IMPORTED_MODULE_7__pages_donate_donate__["a" /* DonatePage */] },
                { title: 'Locales', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Historico', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            ];
        }
        else if (this.userData.rol === 'r') {
            // Yo recojo
            this.pages = [
                { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Donaciones Publicadas', component: __WEBPACK_IMPORTED_MODULE_10__pages_donations_published_donations_published__["a" /* DonationsPublishedPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/app/app.html"*/'<ion-menu type=\'overlay\' [content]="content">\n  <ion-header>\n    <ion-toolbar color="blue-dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button class="btn-menu" menuClose ion-item (click)="logout()">\n        Salir\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/app/app.html"*/
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_error_display_field_error_display__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_modal_terms_modal__ = __webpack_require__(89);
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(17);
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
    function MaterialProvider(http, request) {
        var _this = this;
        this.http = http;
        this.request = request;
        this.MATERIAL_TYPE = [];
        console.log('Hello MaterialProvider Provider');
        this.request.getMaterialTypes().subscribe(function (data) {
            // TODO: validar el servicio, el id que trae es el de la persona y no el del material
            console;
            _this.MATERIAL_TYPE = data;
        }, function (error) {
            console.log(error);
        });
    }
    MaterialProvider.prototype.getMyMaterials = function () {
        return this.request.getMyMaterials();
    };
    MaterialProvider.prototype.saveMaterial = function (material) {
        this.request.saveMaterial(material).subscribe(function (data) {
            console.log('saveMaterial', data);
            //this.setMaterialInLocal(data);
        });
    };
    MaterialProvider.prototype.updateMaterial = function (material) {
        this.request.updateMaterial(material).subscribe(function (data) {
            console.log('updateMaterial', data);
            //this.setMaterialInLocal(data);
        });
    };
    MaterialProvider.prototype.getMaterialValuebyId = function (id) {
        var material = '';
        this.MATERIAL_TYPE.map(function (mat) {
            if (mat.id === id)
                material = mat.descripcion;
        });
        return material;
    };
    MaterialProvider.prototype.getMaterialValuebyTipoId = function (tipoId) {
        var material = '';
        this.MATERIAL_TYPE.map(function (mat) {
            if (mat.tipoId === tipoId)
                material = mat.descripcion;
        });
        return material;
    };
    MaterialProvider.prototype.getUnitiesValuebyId = function (idMat, idUnity) {
        var unityName = '';
        this.MATERIAL_TYPE.map(function (mat) {
            if (mat.id === idMat) {
                mat.unidades.map(function (unity) {
                    if (unity.id == idUnity) {
                        unityName = unity.descripcion;
                    }
                });
            }
        });
        return unityName;
    };
    MaterialProvider.prototype.getAllMaterials = function () {
        return this.request.getAllMaterials();
    };
    MaterialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* RequestProvider */]])
    ], MaterialProvider);
    return MaterialProvider;
}());

//# sourceMappingURL=material.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(17);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_material_material__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_request_request__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_donation_delivery_donation__ = __webpack_require__(112);
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
    function DonatePage(navCtrl, navParams, materialProv, request) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materialProv = materialProv;
        this.request = request;
        this.donationList = [];
        this.materialProv.getMyMaterials().subscribe(function (data) {
            _this.donationList = data;
            console.log('donationList', data);
        }, function (error) {
            console.log(error);
        });
    }
    DonatePage_1 = DonatePage;
    DonatePage.prototype.goToDonationForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__["a" /* DonationFormPage */]);
    };
    DonatePage.prototype.goToDeliveryDonationForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__delivery_donation_delivery_donation__["a" /* DeliveryDonationPage */]);
    };
    DonatePage.prototype.editMaterial = function (material) {
        console.log('edit material', material);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donation_form_donation_form__["a" /* DonationFormPage */], { material: material });
    };
    DonatePage.prototype.deleteMaterial = function (materialId) {
        var _this = this;
        this.request.deleteMaterial(materialId).subscribe(function (ok) {
            console.log(ok);
            _this.navCtrl.setRoot(DonatePage_1);
        });
    };
    DonatePage = DonatePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/'<ion-header>\n  <ion-navbar color="blue-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Donar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n\n  <div class="empty-message" *ngIf="donationList.length === 0">\n    <span>Aún no tienes registradas donaciones</span>\n  </div>\n\n  <div *ngIf="donationList.length > 0">\n    <ion-list *ngFor="let item of donationList">\n      <div class="container-list">\n        <ion-item style="width: 70%">\n          <b>{{ materialProv.getMaterialValuebyId(item.tipoId) }}</b>\n          <br>\n          <b>Cantidad:</b> {{ item.cantidad }}\n          <br>\n          <b>Unidad:</b> {{ materialProv.getUnitiesValuebyId(item.tipoId, item.unidadId) }}\n          <br>\n          <b>Estado:</b> {{ item.estado }}\n          <br> {{ item.descripcion }}\n        </ion-item>\n        <div style="width: 30%; height: 125px; background-color: white">\n          <button style="height: 60px;" ion-button full color="blue-dark" (click)="editMaterial(item)">\n            Editar\n          </button>\n          <button style="height: 60px;" ion-button full style="background-color: red" (click)="deleteMaterial(item.id)">\n            Eliminar\n          </button>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n\n  <ion-footer>\n    <button ion-button color="secondary" full *ngIf="donationList.length > 0" (click)="goToDeliveryDonationForm()"> Entregar donación</button>\n    <button ion-button full color="blue-dark" (click)="goToDonationForm()">\n      <span>Adicionar Material</span>\n    </button>\n  </ion-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/alope24/Documents/projects/fedesoft/proyectoJoha/Reciclar123/client/ReciclarFrontend/src/pages/donate/donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_material_material__["a" /* MaterialProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_request_request__["a" /* RequestProvider */]])
    ], DonatePage);
    return DonatePage;
    var DonatePage_1;
}());

//# sourceMappingURL=donate.js.map

/***/ }),

/***/ 88:
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

},[224]);
//# sourceMappingURL=main.js.map