import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationsPublishedDetailsPage } from './donations-published-details';

@NgModule({
  declarations: [
    DonationsPublishedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationsPublishedDetailsPage),
  ],
})
export class DonationsPublishedDetailsPageModule {}
