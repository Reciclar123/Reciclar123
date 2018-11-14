import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { UserProvider } from '../providers/user/user';
import { DonatePage } from '../pages/donate/donate';
import { UserModel } from '../models/register-data.model';
import { RequestProvider } from '../providers/request/request';
import { SettingsPage } from '../pages/settings/settings';
import { DonationsPublishedPage } from '../pages/donations-published/donations-published';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  userData: UserModel;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private requestPro: RequestProvider,
    private usrPro: UserProvider,
    private barcodeScanner: BarcodeScanner) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // observable para user
      this.requestPro.$obsUser.subscribe((data) => {
        this.userData = data;
        this.setMenuOptions();
      });

      if (this.usrPro.isLogin()) {
        console.log('usuario logeado');
        this.userData = this.usrPro.user;
        this.setMenuOptions();
        this.nav.setRoot(HomePage);
      } else {
        this.nav.setRoot(WelcomePage);
      }

    });
  }

  logout() {
    localStorage.clear();
    this.initializeApp();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  setMenuOptions() {
    if (this.userData.rol === 'd') {
      // Yo dono
      this.pages = [
        { title: 'Inicio', component: HomePage },
        { title: 'Ajustes', component: SettingsPage },
        { title: 'Donar', component: DonatePage },
        { title: 'Locales', component: HomePage },
        { title: 'Historico', component: HomePage },
      ];
    } else if (this.userData.rol === 'r') {
      // Yo recojo
      this.pages = [
        { title: 'Inicio', component: HomePage },
        { title: 'Donaciones Publicadas', component: DonationsPublishedPage },
        { title: 'Tu lista de Donaciones', component: HomePage },
        { title: 'Historico', component: HomePage },
      ];
    }
  }

	scanQRCode() {
		this.barcodeScanner
			.scan()
			.then((barcodeData) => {
				let barcodeDat = barcodeData.text;
				console.log('Barcode data', barcodeDat);
				alert('Barcode data' + barcodeDat);
			})
			.catch((err) => {
				console.log('Error', err);
				alert('Error'+err);
			});
	}

}
