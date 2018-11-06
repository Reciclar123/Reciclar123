import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListModel } from '../../models/list.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialTypeModel, UnitiesModel, MaterialModel } from '../../models/donations.model';
import { MaterialProvider } from '../../providers/material/material';
import { MATERIAL_STATES } from "../../models/static-data/static-data";
import { DonatePage } from '../donate/donate';
import { RequestProvider } from '../../providers/request/request';
import { UserModel } from '../../models/register-data.model';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-donation-form',
  templateUrl: 'donation-form.html',
})
export class DonationFormPage {

  user: UserModel;

  private formSubmitAttempt: boolean;
  formGroup: FormGroup;
  isValidFormSubmitted = null;

  private updateMaterial: boolean = false;


  materialTypeList: Array<MaterialTypeModel> = [];
  UnitiesList: Array<UnitiesModel> = [];
  materialStatesList: Array<ListModel> = MATERIAL_STATES;

  materialData: MaterialModel = {
    tipoId: '',
    cantidad: 1,
    unidadId: '',
    estado: '',
    descripcion: '',
    personId: '',
    addressRecoleccionId: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public materialProv: MaterialProvider,
    public request: RequestProvider,
    public userProv: UserProvider) {

    this.user = this.userProv.user;


    this.request.getMaterialTypes().subscribe((data) => {
      console.log('materialTypeList', data);
      this.materialTypeList = data;

      if (navParams.get('material')) {
        this.updateMaterial = true;
        this.materialData = navParams.get('material');
        const mat = this.materialTypeList.filter(mat => (mat.id === this.materialData.tipoId));
        console.log('mat', mat)
        this.updateUnities(mat[0]);
      }
      this.materialData.personId = this.user.address[0].personId;
      this.materialData.addressRecoleccionId = this.user.address[0].id;

    });

    this.formGroup = new FormGroup({
      materialType: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      unities: new FormControl('', [Validators.required]),
      materialState: new FormControl('', [Validators.required]),
      materialDescription: new FormControl('', [Validators.required]),
    });
  }

  updateUnities(material: MaterialTypeModel) {
    console.log(material);
    this.UnitiesList = material.unidades;
    console.log(this.UnitiesList);
  }

  saveMaterial() {
    console.log('materialData', this.materialData);

    this.formSubmitAttempt = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formSubmitAttempt = true;

    if (this.updateMaterial) {
      this.materialProv.saveMaterial(this.materialData);
    } else {
      this.materialProv.updateMaterial(this.materialData);

    }

    this.navCtrl.setRoot(DonatePage);
  }

}
