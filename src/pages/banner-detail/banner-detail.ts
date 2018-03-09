import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BannerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-banner-detail',
  templateUrl: 'banner-detail.html',
})
export class BannerDetailPage {

  BannerDetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const data = JSON.parse(localStorage.getItem('itemBannerDetail'));
    this.BannerDetail = data['imgslide_title'];

    console.log("qwerty = ", this.BannerDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BannerDetailPage');
  }

}
