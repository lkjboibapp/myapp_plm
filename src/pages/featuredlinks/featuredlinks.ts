import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

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

  featuredlinks: any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public http: Http) {

    this.ETPhoneHome();
    console.log('======================================');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedlinksPage');
  }

  ETPhoneHome() {
    let path = 'http://localhost/service/ServiceMobile/ServiceFeaturedLinks.php/getFeaturedLinks';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;
  
    console.log(',mdfmva;lad');
    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.featuredlinks = responseData.data;
        console.log(responseData.data);
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }

}
