import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Donation } from '../../models/donations.model';


@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {

  donationList: Array<Donation> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

}
