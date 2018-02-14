import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ELearningPage } from '../pages/e-learning/e-learning';
import { CoursePage } from '../pages/course/course';
import { ContactPage } from '../pages/contact/contact';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { UsabilityPage } from '../pages/usability/usability';
import { ContactusPage } from '../pages/contactus/contactus';
import { PrivatemessagePage } from '../pages/privatemessage/privatemessage';
import { LoginPage } from '../pages/login/login';
import { BannerPage } from '../pages/banner/banner';
import { NewsPage } from '../pages/news/news';
import { DocumentsPage } from '../pages/documents/documents';
import { VdoPage } from '../pages/vdo/vdo';

import { HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ELearningPage,
    CoursePage,
    ContactPage,
    TabsControllerPage,
    AboutPage,
    FaqPage,
    UsabilityPage,
    ContactusPage,
    PrivatemessagePage,
    LoginPage,
    BannerPage,
    NewsPage,
    DocumentsPage,
    VdoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
        IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ELearningPage,
    CoursePage,
    ContactPage,
    TabsControllerPage,
    AboutPage,
    FaqPage,
    UsabilityPage,
    ContactusPage,
    PrivatemessagePage,
    LoginPage,
    BannerPage,
    NewsPage,
    DocumentsPage,
    VdoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}