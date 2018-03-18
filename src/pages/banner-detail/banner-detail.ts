import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  [x: string]: any;
  imgslide_id: any;
  imgslide_detail: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {

    this.data = this.navParams.get("id");

    this.imgslide_title = this.data.imgslide_title;

    this.imgslide_detail = this.data.imgslide_detail;

    console.log("imgslide_detail =", this.imgslide_detail);


  }

}
