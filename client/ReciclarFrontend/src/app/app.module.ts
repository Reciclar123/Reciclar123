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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ResetPassPage
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
    FieldErrorDisplayComponent,
    TermsModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ValidationsProvider,
    RequestProvider,
    UserProvider
  ]
})
export class AppModule { }
