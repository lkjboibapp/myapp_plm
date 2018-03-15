import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
  [x: string]: any;
  item: any;

  constructor(public navCtrl: NavController) {
    const data = JSON.parse(localStorage.getItem('itemNew'));
   
    this.cms_title = data['cms_title'];
    this.cms_detail = data['cms_detail'];
    this.cms_short_title = data['cms_short_title'];
    this.create_date = data['create_date'];
  }

}
