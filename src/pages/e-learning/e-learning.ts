import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BannerPage } from '../banner/banner';
import { NewsPage } from '../news/news';
import { DocumentsPage } from '../documents/documents';
import { VdoPage } from '../vdo/vdo';
import { FeaturedlinksPage } from '../featuredlinks/featuredlinks';

@Component({
  selector: 'page-e-learning',
  templateUrl: 'e-learning.html'
})
export class ELearningPage {

  imageArray: any = [];

  constructor(public navCtrl: NavController) {
    this.imageArray = [
      { 'image': '../../assets/img/a.jpg' },
      { 'image': '../../assets/img/bu.jpg' },
      { 'image': '../../assets/img/tim.png' },
      { 'image': '../../assets/img/t.jpg' }
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
}
