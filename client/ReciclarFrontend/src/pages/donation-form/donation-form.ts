import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListModel } from '../../models/list.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialModel } from '../../models/donations.model';
import { MaterialProvider } from '../../providers/material/material';
import { MATERIALS, MATERIAL_STATES, UNITIES } from "../../models/static-data";

@IonicPage()
@Component({
  selector: 'page-donation-form',
  templateUrl: 'donation-form.html',
})
export class DonationFormPage {
  
  private formSubmitAttempt: boolean;
  formGroup: FormGroup;
  isValidFormSubmitted = null;

  materialList: Array<ListModel> = MATERIALS;
  UnitiesList: Array<ListModel> = UNITIES;
  materialStatesList: Array<ListModel> = MATERIAL_STATES;

  materialData: MaterialModel = {
    materialType: '',
    quantity: 1,
    unities: '',
    materialState: '',
    materialDescription: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public materialProv: MaterialProvider) {

    this.formGroup = new FormGroup({
      materialType: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      unities: new FormControl('', [Validators.required]),
      materialState: new FormControl('', [Validators.required]),
      materialDescription: new FormControl('', [Validators.required]),
    });
  }

  saveMaterial() {
    console.log('materialData', this.materialData);

    this.formSubmitAttempt = false;
    if (this.formGroup.invalid) {
      return;
    }
    this.formSubmitAttempt = true;
    this.materialProv.setMaterialInLocal(this.materialData);
    this.navCtrl.pop();
  }

}
