import { Component } from '@angular/core';
import { BannerPage } from '../banner/banner';
import { NewsPage } from '../news/news';
import { DocumentsPage } from '../documents/documents';
import { VdoPage } from '../vdo/vdo';
import { FeaturedlinksPage } from '../featuredlinks/featuredlinks';
import { SearchPage } from '../search/search';

import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemNews } from '../../models/itemnews';
import { Items } from '../../providers/providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-e-learning',
  templateUrl: 'e-learning.html'
})
export class ELearningPage {

  currentItems: ItemNews[];
  news: any;
  imageArray: any = [];
  featuredlinks: any;
  public resultsVDO: any;

  constructor(private inAppBrowser: InAppBrowser,
    public navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController,
    public http: Http) {

    this.imageArray = [
     { 'image': '../../assets/img/1.jpg' },
      { 'image': '../../assets/img/2.jpg' },
      { 'image': '../../assets/img/3.jpg' }


    ]

    this.resultsVDO = "";
  }

  ngAfterViewInit() {
    this.ETPhoneHome();
    this.FeaturedHome();
    this.ResulteVDO();
  }

  //search
  clickSearch(){
    console.log("clickSearch");

  }


  goToSearch(params) {
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
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
    let path = 'http://112.121.150.4/ServiceMobile/ServiceNew_v3.php/getNews';
    let encodedPath = encodeURI(path);
    this.http.get(encodedPath)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.news = responseData.data;
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }

  FeaturedHome() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceFeaturedLinks.php/getFeaturedLinks';
    let encodedPath = encodeURI(path);

    this.http.get(encodedPath)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.featuredlinks = responseData.data;
        // console.log(this.featuredlinks);
      },

        err => {
          console.log('error in FeaturedHome');
        });
  }

  ResulteVDO() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceVDO.php/getvdo';
    let encodedPath = encodeURI(path);
    // console.log(encodedPath)

    this.http.get(encodedPath)
      .map(res => res.json()).subscribe(data => {
        this.resultsVDO = data.data;
      },
        err => {
          console.log("err ResulteVDO");
        });
  }

  OpenUrl(url) {

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create(url, '_self', options);
  }


  openItem(item: ItemNews) {
    this.navCtrl.push('NewsDetailPage', {
      item: item
    });
  }
}

