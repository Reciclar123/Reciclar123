import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../models/donations.model';
import { DonationFormPage } from '../donation-form/donation-form';
import { MaterialProvider } from '../../providers/material/material';
import { RequestProvider } from '../../providers/request/request';


@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  donationList: Array<MaterialModel> = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public materialProv: MaterialProvider,
              public request: RequestProvider) {

    this.materialProv.getMyMaterials().subscribe( (data) => {
      this.donationList = data;
      console.log(data)
    });
  }
  
  goToDonationForm() {
    this.navCtrl.push(DonationFormPage);
  }

  editMaterial(material: MaterialModel) {
    console.log('edit material', material)
    this.navCtrl.push(DonationFormPage, {material});
  }

  deleteMaterial(materialId: string) {
    this.request.deleteMaterial(materialId).subscribe( (ok) => {
      console.log(ok)
      this.navCtrl.setRoot(DonatePage);
    })
  }

}
