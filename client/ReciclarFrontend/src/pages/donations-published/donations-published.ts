import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialProvider } from '../../providers/material/material';
import { UserProvider } from '../../providers/user/user';
import { RequestProvider } from '../../providers/request/request';
import { UserModel } from '../../models/register-data.model';
import { AllMaterialList } from '../../models/donations.model';
import { DonationsPublishedDetailsPage } from '../donations-published-details/donations-published-details';


@IonicPage()
@Component({
  selector: 'page-donations-published',
  templateUrl: 'donations-published.html',
})
export class DonationsPublishedPage {
  
  _user: UserModel;
  allMaterialsList: Array<AllMaterialList> = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public materialProv: MaterialProvider,
    public userProv: UserProvider,
    public request: RequestProvider) {
      this._user = this.userProv.user;

    this.materialProv.getAllMaterials().subscribe( data => {
      this.allMaterialsList = data;
      console.log('allMaterialsList',data)
    }, error => {
      console.log(error);
    });
  }

  goToDetails(material: AllMaterialList) {
    this.navCtrl.push(DonationsPublishedDetailsPage, {material});
  }
  

}
