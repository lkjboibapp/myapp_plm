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

import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule,Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Items } from '../mocks/providers/items';
import { Api } from '../providers/providers';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


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
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    Api,
    Items,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}