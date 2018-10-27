import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'terms-modal',
  templateUrl: 'terms-modal.html'
})
export class TermsModalComponent {

  constructor(public viewCtrl: ViewController) {
  }

  closeTermsModal() {
    this.viewCtrl.dismiss();
  }

}
