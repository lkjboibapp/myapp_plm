import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {


  news: any;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController, public http: Http) {
    this.ETPhoneHome();
  }

  ETPhoneHome() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceNew_v3.php/getNews';
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
  openItem(item) {

    localStorage.setItem('itemNew', JSON.stringify(item))
    this.navCtrl.push(NewsDetailPage);

  }

}
