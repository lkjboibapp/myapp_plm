import { Component,OnInit } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

/**
 * Generated class for the FeaturedlinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-featuredlinks',
  templateUrl: 'featuredlinks.html',
})
export class FeaturedlinksPage {

  // url: string;  
  data: any;
  featuredlinks: any;
  constructor(private inAppBrowser: InAppBrowser,public navCtrl: NavController,public modalCtrl: ModalController, public http: Http) {

    this.ETPhoneHome();


    this.http = http;
    console.log('======================================');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedlinksPage');
  }

  ETPhoneHome() {
    let path = 'http://localhost/service/ServiceMobile/ServiceFeaturedLinks.php/getFeaturedLinks';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;
  
    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.featuredlinks = responseData.data;
        console.log(this.featuredlinks);
      },

        err => {
          console.log('error in ETPhoneHome');
        });
  }
  // openWebpage() {
  //   const options: InAppBrowserOptions = {
  //     zoom: 'no'
  //   }
  //   const browser = this.inAppBrowser.create(url, '_self', options);
  // }
  OpenUrl(url)
  {
   
    const options: InAppBrowserOptions = {
          zoom: 'no'
        }
    const browser = this.inAppBrowser.create(url, '_self', options);      
  }

}
