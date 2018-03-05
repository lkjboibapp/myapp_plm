import { Component } from '@angular/core';
import { BannerPage } from '../banner/banner';
import { NewsPage } from '../news/news';
import { DocumentsPage } from '../documents/documents';
import { VdoPage } from '../vdo/vdo';
import { FeaturedlinksPage } from '../featuredlinks/featuredlinks';


import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemNews } from '../../models/itemnews';
import { Items } from '../../providers/providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-e-learning',
  templateUrl: 'e-learning.html'
})
export class ELearningPage {

  currentItems: ItemNews[];

  news: any;
  imageArray: any = [];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public http: Http) {
    this.ETPhoneHome();
    console.log('======================================');
    this.imageArray = [
      { 'image': '../../assets/img/a.jpg' },
      { 'image': '../../assets/img/bu.jpg' },
      { 'image': '../../assets/img/tim.png' }
      // { 'image': '../../assets/img/t.jpg' }
    ]
  }
  goToBanner(params) {
    if (!params) params = {};
    this.navCtrl.push(BannerPage);
  }
  goToNews(params) {
    if (!params) params = {};
    this.navCtrl.push(NewsPage);
  }
  goToDocuments(params) {
    if (!params) params = {};
    this.navCtrl.push(DocumentsPage);
  }
  getVdo(params) {
    if (!params) params = {};
    this.navCtrl.push(VdoPage);
  }

  getFeatured(params) {
    if (!params) params = {};
    this.navCtrl.push(FeaturedlinksPage);
  }

  ETPhoneHome() {
    let path = 'http://localhost/Service/ServiceMobile/ServiceNew_v3.php/getNews';
    let encodedPath = encodeURI(path);
    let timeoutMS = 20000;
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
  openItem(item: ItemNews) {
    this.navCtrl.push('NewsDetailPage', {
      item: item
    });
  }
}
