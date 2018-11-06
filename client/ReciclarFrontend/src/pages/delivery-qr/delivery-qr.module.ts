import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryQrPage } from './delivery-qr';

@NgModule({
  declarations: [
    DeliveryQrPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryQrPage),
  ],
})
export class DeliveryQrPageModule {}
