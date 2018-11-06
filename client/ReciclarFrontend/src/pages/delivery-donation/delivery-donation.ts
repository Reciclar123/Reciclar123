import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialModel, DeliveryMaterials } from '../../models/donations.model';
import { MaterialProvider } from '../../providers/material/material';
import { UserModel } from '../../models/register-data.model';
import { UserProvider } from '../../providers/user/user';
import { RequestProvider } from '../../providers/request/request';
import { DeliveryQrPage } from '../delivery-qr/delivery-qr';


@IonicPage()
@Component({
  selector: 'page-delivery-donation',
  templateUrl: 'delivery-donation.html',
})
export class DeliveryDonationPage {

  donationList: Array<MaterialModel> = [];
  materialsIdSelected: Array<string> = [];
  _user: UserModel

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public materialProv: MaterialProvider,
    public userProv: UserProvider,
    public request: RequestProvider) {
    this._user = this.userProv.user;
    this.materialsIdSelected = [];
    console.log('initial materialsIdSelected', this.materialsIdSelected);


    this.materialProv.getMyMaterials().subscribe((data) => {
      this.donationList = data;
      console.log(data)
    });
  }

  toggleMaterials(materialId: string) {
    const index = this.materialsIdSelected.indexOf(materialId);
    console.log('index', index);
    if (index === -1) {
      this.materialsIdSelected.push(materialId);
    } else {
      this.materialsIdSelected.splice(index, 1);
    }
    console.log('final materialsIdSelected', this.materialsIdSelected);
  }

  deliveryMaterial() {
    const delMaterial: DeliveryMaterials = {
      personId: this._user.address[0].personId,
      materiales: this.materialsIdSelected
    }

    this.request.deliveryMaterials(delMaterial).subscribe((data) => {
      console.log('deliveryMaterials', data);
      localStorage.setItem('deliveryId', data.id);
      this.navCtrl.setRoot(DeliveryQrPage, {qrId: data.id});
    })

  }

}
