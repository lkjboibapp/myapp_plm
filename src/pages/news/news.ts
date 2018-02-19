import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemNews } from '../../models/itemnews';
import { Items } from '../../providers/providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  currentItems: ItemNews[];

  news: any;
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public http: Http) {
    this.ETPhoneHome();
    console.log('======================================');
  }

  ETPhoneHome() {
    let path = 'http://localhost/ServiceMobile/Service_VDO_Usability_Report_New/ServiceNew_v3.php/getNews';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.news = responseData.data;
        console.log(responseData.data);
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }

  ionViewDidLoad() {
  }
  openItem(item: ItemNews) {
    this.navCtrl.push('NewsDetailPage', {
      item: item
    });
  }

}
