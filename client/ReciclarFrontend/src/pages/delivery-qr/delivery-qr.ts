import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import QRCode from 'qrcode'


@IonicPage()
@Component({
  selector: 'page-delivery-qr',
  templateUrl: 'delivery-qr.html',
})
export class DeliveryQrPage {
  urlQR: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const qrId = this.navParams.get('qrId');
    console.log('qrId', qrId)
    this.generateQR(qrId)
  }

  generateQR(qrId: string) {
    QRCode.toDataURL(qrId)
    .then(url => {
      this.urlQR = url
      console.log(url)
    })
    .catch(err => {
      console.error(err)
    })
  }

}
