import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, AlertController, ToastController } from 'ionic-angular';

import { LicencePage } from '../licence/licence';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { ELearningPage } from '../e-learning/e-learning';
import { Http } from '@angular/http';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  resposeData: any;
  userData = { "username": "", "password": "" };

  constructor(public navCtrl: NavController,public NavPar: NavParams,public alerCtrl: AlertController,public authService: AuthServiceProvider,public toastCtrl: ToastController) { }

  ngAfterViewInit() {
  }

  login() {
    if (this.userData.username && this.userData.password) {
      this.authService.postData(this.userData, "login").then((result) => {
        this.resposeData = result;
        console.log("userData = ", this.userData);
        if (this.resposeData.data) {
          localStorage.setItem('userData', JSON.stringify(this.resposeData))
          // console.log("JSON.stringify",JSON.stringify(this.resposeData));
          this.navCtrl.push(TabsControllerPage);
        }
        else {
          this.presentToast("Please give valid username and password");
        }
      }, (err) => {
        //Connection failed message
        this.presentToast("ไม่มีการเชื่อมต่อ......")
      });
    }
    else {
      console.log("userData = ", this.userData);
      this.presentToast("Give username and password");
    }
    }
    
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  LicencePage() {
    this.navCtrl.push(LicencePage);
  }

  ELearningPage() {
    this.navCtrl.push(ELearningPage);
  }
  
  ForgotPassPage() {
    this.navCtrl.push(ForgotPassPage);
  }
}




