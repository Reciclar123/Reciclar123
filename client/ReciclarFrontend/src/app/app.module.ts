import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationsProvider } from '../providers/validations/validations';
import { ComponentsModule } from '../components/components.module';
import { FieldErrorDisplayComponent } from '../components/field-error-display/field-error-display';
import { TermsModalComponent } from '../components/terms-modal/terms-modal';
import { LoginPage } from '../pages/login/login';
import { ResetPassPage } from '../pages/reset-pass/reset-pass';
import { RequestProvider } from '../providers/request/request';
import { UserProvider } from '../providers/user/user';
import { DonatePage } from '../pages/donate/donate';
import { DonationFormPage } from '../pages/donation-form/donation-form';
import { MaterialProvider } from '../providers/material/material';
import { SettingsPage } from '../pages/settings/settings';
import { DeliveryDonationPage } from '../pages/delivery-donation/delivery-donation';
import { DeliveryQrPage } from '../pages/delivery-qr/delivery-qr';
import { DonationsPublishedPage } from '../pages/donations-published/donations-published';
import { DonationsPublishedDetailsPage } from '../pages/donations-published-details/donations-published-details';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ResetPassPage,
    DonatePage,
    DonationFormPage,
    SettingsPage,
    DeliveryDonationPage,
    DeliveryQrPage,
    DonationsPublishedPage,
    DonationsPublishedDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ResetPassPage,
    DonatePage,
    DonationFormPage,
    SettingsPage,
    FieldErrorDisplayComponent,
    TermsModalComponent,
    DeliveryDonationPage,
    DeliveryQrPage,
    DonationsPublishedPage,
    DonationsPublishedDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ValidationsProvider,
    RequestProvider,
    UserProvider,
    MaterialProvider,
    BarcodeScanner
  ]
})
export class AppModule { }
