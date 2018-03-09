import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { BannerDetailPage } from '../banner-detail/banner-detail';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-banner',
  templateUrl: 'banner.html'
})
export class BannerPage {
 
  data: any;
  public data_result: any;
  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public alertCtrl: AlertController,) {
     this.bannerService();
  }

  bannerService() {
    this.authService.bannerGetData(this.data, 'getImgslide').then((result) => {
      this.data_result = result['data'];
      console.log("result = ",result);
    }, (err) => {
      console.log(err);
    });
  }


  bannerdetail(item){
    localStorage.setItem('itemBannerDetail', JSON.stringify(item))
    this.navCtrl.push(BannerDetailPage);
  }

}
