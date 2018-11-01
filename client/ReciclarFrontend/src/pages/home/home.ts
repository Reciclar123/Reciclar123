import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { UserProvider } from '../../providers/user/user';
import { RequestProvider } from '../../providers/request/request';
import { UserModel } from '../../models/register-data.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  initialMessage: string;
  urlVideo: string;
  videoUrlSecure: any;
  user: UserModel;

  constructor(public navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private userProv: UserProvider,
    private requestPro: RequestProvider) {

    this.user = this.userProv.user;


    if (this.userProv.user.rol === 'd') {
      // Yo dono
      this.initialMessage = 'Con esta App podrás donar tus materiales reciclables y por ellos recibirás "gotas" que puedes cambiar por espectaculares promociones de nuestros patrocinadores.';
      this.urlVideo = 'https://www.youtube.com/embed/5-sWpFCN0C8';

    } else if (this.userProv.user.rol === 'r') {
      // Yo recojo
      this.initialMessage = 'Con esta App podrás visualizar a donantes de material reciclable programar la recogida del material y evaluar su donación para entregar "gotas" como recompensa.';
      this.urlVideo = 'https://www.youtube.com/embed/5q2HSdgO7CA';
    }

    this.videoUrlSecure = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);

  }

  checkMenuOptions() {
    this.requestPro.generateUserData(this.user);
  }

}
