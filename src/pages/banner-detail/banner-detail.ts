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

  imgslide_id: any;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {

    this.data = this.navParams.get("id");

    this.imgslide_id = this.data.imgslide_id;

    
  }

}
