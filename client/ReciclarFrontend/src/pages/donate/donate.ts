import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../models/donations.model';
import { DonationFormPage } from '../donation-form/donation-form';
import { MaterialProvider } from '../../providers/material/material';


@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  donationList: Array<MaterialModel> = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public materialProv: MaterialProvider) {
    this.donationList = this.materialProv.getMaterialsInLocal();
  }
  
  goToDonationForm() {
    this.navCtrl.push(DonationFormPage);
  }

}
