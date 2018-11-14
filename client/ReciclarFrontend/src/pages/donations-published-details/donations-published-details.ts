import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialProvider } from '../../providers/material/material';
import { RequestProvider } from '../../providers/request/request';
import { AllMaterialList } from '../../models/donations.model';


@IonicPage()
@Component({
  selector: 'page-donations-published-details',
  templateUrl: 'donations-published-details.html',
})
export class DonationsPublishedDetailsPage {

  material: AllMaterialList;
  addressMaterial: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public materialProv: MaterialProvider,
    public request: RequestProvider) {
      this.material = this.navParams.get('material');
      this.getMaterialAddress(this.material.personId, this.material.addressRecoleccionId);
  }

  getMaterialAddress(personId: string, addressId: string) {
    this.request.getAddressByPersonId(personId).subscribe(data => {
      data.map( addr => {
        if(addr.id === addressId) {
          this.addressMaterial = addr.address;
        }
      });
    });
  }

}
