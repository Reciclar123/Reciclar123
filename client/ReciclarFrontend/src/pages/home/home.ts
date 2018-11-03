import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  initialMessage: string;
  urlVideo: string;
  videoUrlSecure: any;

  constructor(public navCtrl: NavController,
    private sanitizer: DomSanitizer) {
    // Yo dono
    this.initialMessage = 'Con esta App podrás donar tus materiales reciclables y por ellos recibirás "gotas" que puedes cambiar por espectaculares promociones de nuestros patrocinadores.';
    this.urlVideo = 'https://www.youtube.com/embed/5-sWpFCN0C8';

    // Yo recojo
    // this.initialMessage = 'Con esta App podrás visualizar a donantes de material reciclable programar la recogida del material y evaluar su donación para entregar "gotas" como recompensa.';
    // this.urlVideo = 'https://www.youtube.com/embed/5q2HSdgO7CA';
    
    this.videoUrlSecure = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);

  }

}
