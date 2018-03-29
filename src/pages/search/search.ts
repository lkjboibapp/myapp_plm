import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public banner: any;
  //==========
  public banners: any;
  ///++++++++++++++++
  data: any;

  constructor(public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.bannerService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput(ev: any) {
    let val = ev.target.value;
    console.log("val->", val);
    if (val && val.trim() != '') {
      this.banners = this.banner.filter((item) => {
        return (item.imgslide_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.bannerService();
    }
  }

  bannerService() {
    this.authService.bannerGetData(this.data, 'getImgslide').then((result) => {
      this.banner = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

}
