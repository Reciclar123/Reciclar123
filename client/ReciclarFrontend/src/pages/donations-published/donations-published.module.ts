import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationsPublishedPage } from './donations-published';

@NgModule({
  declarations: [
    DonationsPublishedPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationsPublishedPage),
  ],
})
export class DonationsPublishedPageModule {}
