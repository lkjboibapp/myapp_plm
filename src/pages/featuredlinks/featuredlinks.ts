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
  // data: any;
  featuredlinks: any;
  public items_filter: any;
  items: any;
  constructor(private inAppBrowser: InAppBrowser,public navCtrl: NavController,public modalCtrl: ModalController, public http: Http) {

    this.http = http;
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad FeaturedlinksPage');
    this.ETPhoneHome();
  }

  ETPhoneHome() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceFeaturedLinks.php/getFeaturedLinks';
    let encodedPath = encodeURI(path);
  
    this.http.get(encodedPath)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.featuredlinks = responseData.data;
      },

        err => {
          console.log('error in ETPhoneHome');
        });
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = val.toLowerCase();

      // console.log("test usa", this.usability);
      this.featuredlinks = this.featuredlinks.filter((item) => {
        // console.log(item.usa_title.toLowerCase())
        return (item.link_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.ETPhoneHome();
    }
  }

  OpenUrl(url)
  {
    const options: InAppBrowserOptions = {
          zoom: 'no'
        }
    const browser = this.inAppBrowser.create(url, '_self', options);      
  }

}
