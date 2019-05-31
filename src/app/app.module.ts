import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {AddThingPage} from '../pages/add-thing/add-thing';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {HttpserviceService} from '../provider/http/httpservice.service';
/* import {HttpErrorHandler} from '../provider/http/http-error-handler.service'; */
import {HttpErrorHandler} from '../providers/http/http-error-handler.service';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceTestProvider } from '../providers/service-test/service-test';

@NgModule({
  declarations: [
    MyApp,
    AddThingPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddThingPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    HttpErrorHandler,
    HttpserviceService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceTestProvider
  ]
})
export class AppModule {}
