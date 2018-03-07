import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { ELearningPage } from '../e-learning/e-learning';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public http: Http) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }
  
  ELearningPage() {
    this.navCtrl.push(ELearningPage);
  }
}


