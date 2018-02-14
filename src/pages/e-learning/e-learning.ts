import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BannerPage } from '../banner/banner';
import { NewsPage } from '../news/news';
import { DocumentsPage } from '../documents/documents';
import { VdoPage } from '../vdo/vdo';

@Component({
  selector: 'page-e-learning',
  templateUrl: 'e-learning.html'
})
export class ELearningPage {

  constructor(public navCtrl: NavController) {
  }
  goToBanner(params){
    if (!params) params = {};
    this.navCtrl.push(BannerPage);
  }
  goToNews(params){
    if (!params) params = {};
    this.navCtrl.push(NewsPage);
  }
  goToDocuments(params){
    if (!params) params = {};
    this.navCtrl.push(DocumentsPage);
  }
  getVdo(params){
    if (!params) params = {};
    this.navCtrl.push(VdoPage)
  }
}
