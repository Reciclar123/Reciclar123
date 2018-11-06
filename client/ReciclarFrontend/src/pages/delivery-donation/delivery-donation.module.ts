import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryDonationPage } from './delivery-donation';

@NgModule({
  declarations: [
    DeliveryDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryDonationPage),
  ],
})
export class DeliveryDonationPageModule {}
