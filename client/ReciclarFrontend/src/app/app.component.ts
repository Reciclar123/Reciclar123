import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { UserProvider } from '../providers/user/user';
import { DonatePage } from '../pages/donate/donate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private usrPro: UserProvider) {
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

      if (this.usrPro.isLogin()) {
        console.log('usuario logeado');
        this.nav.setRoot(HomePage);
      } else {
        this.nav.setRoot(WelcomePage);
      }

      // Yo dono
      this.pages = [
        { title: 'Inicio', component: HomePage },
        { title: 'Ajustes', component: HomePage },
        { title: 'Donar', component: DonatePage },
        { title: 'Locales', component: HomePage },
        { title: 'Historico', component: HomePage },
      ];

      // Yo recojo
      // this.pages = [
      //   { title: 'Inicio', component: HomePage },
      //   { title: 'Donaciones Publicadas', component: HomePage },
      //   { title: 'Tu lista de Donaciones', component: HomePage },
      //   { title: 'Recoger', component: HomePage },
      //   { title: 'Historico', component: HomePage },
      // ];

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
}
