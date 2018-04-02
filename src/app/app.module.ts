import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ELearningPage } from '../pages/e-learning/e-learning';

import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ContactPage } from '../pages/contact/contact';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { RegisterPage } from '../pages/register/register';
import { UsabilityPage } from '../pages/usability/usability';
import { ContactusPage } from '../pages/contactus/contactus';
import { PrivatemessagePage } from '../pages/privatemessage/privatemessage';
import { LoginPage } from '../pages/login/login';
import { BannerPage } from '../pages/banner/banner';
import { NewsPage } from '../pages/news/news';
import { DocumentsPage } from '../pages/documents/documents';
import { VdoPage } from '../pages/vdo/vdo';
import { LicencePage } from '../pages/licence/licence';
import { FeaturedlinksPage } from '../pages/featuredlinks/featuredlinks';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { AddRoomPage } from '../pages/add-room/add-room';
import { BannerDetailPage } from '../pages/banner-detail/banner-detail';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { PrivateMessageReturnPage } from '../pages/private-message-return/private-message-return';
import { NewCoursePage } from '../pages/new-course/new-course';
import { DetailCoursePage } from '../pages/detail-course/detail-course';
import { FileLeanPage } from '../pages/file-lean/file-lean';

import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Items } from '../mocks/providers/items';
import { ItemsCouse } from '../mocks/providers/itemCouse';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent } from "@ionic-native/google-maps";

import { Api } from '../providers/providers';
import { AuthServiceProvider } from '../providers/auth-service/auth-service'
import { AlertController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { CourServiceProvider } from '../providers/cour/cour-service';
import { SearchPage } from '../pages/search/search';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    ELearningPage,
    ContactPage,
    TabsControllerPage,
    DashboardPage,
    AboutPage,
    EditprofilePage,
    FaqPage,
    UsabilityPage,
    ContactusPage,
    PrivatemessagePage,
    LoginPage,
    BannerPage,
    NewsPage,
    DocumentsPage,
    VdoPage,
    ForgotPassPage,
    RegisterPage,
    LicencePage,
    FeaturedlinksPage,
    AddRoomPage,
    BannerDetailPage,
    NewsDetailPage,
    PrivateMessageReturnPage,
    NewCoursePage,
    DetailCoursePage,
    SearchPage,
    FileLeanPage
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
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ELearningPage,
    ContactPage,
    TabsControllerPage,
    DashboardPage,
    AboutPage,
    EditprofilePage,
    FaqPage,
    UsabilityPage,
    ContactusPage,
    PrivatemessagePage,
    LoginPage,
    FileLeanPage,
    BannerPage,
    NewsPage,
    DocumentsPage,
    VdoPage,
    RegisterPage,
    ForgotPassPage,
    LicencePage,
    FeaturedlinksPage,
    AddRoomPage,
    BannerDetailPage,
    NewsDetailPage,
    PrivateMessageReturnPage,
    NewCoursePage,
    DetailCoursePage,
    SearchPage
  ],
  providers: [
    Api,
    Items,
    ItemsCouse,
    StatusBar,
    GoogleMaps,
    SplashScreen,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    AuthServiceProvider,
    CourServiceProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule { }
