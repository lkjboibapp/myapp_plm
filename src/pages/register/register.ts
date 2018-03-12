import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login'

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  responseData: any;
  userData = { "idcard": "", "email": "", "course": "", "perfix": "", "name": "", "lastname": "", "office": "", "job": "" };

  constructor(public navCtrl: NavController,
    private http: Http,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController) {
  }

  signup() {

    if (this.userData.idcard && this.userData.email && this.userData.course && this.userData.perfix && this.userData.name&& this.userData.lastname&& this.userData.office&& this.userData.job) {

      this.authService.postData(this.userData, 'login').then((result) => {
        this.responseData = result;
        console.log("responseData", this.responseData)

        // if (this.responseData.userData) {
        //   console.log(this.responseData);
        //   localStorage.setItem('userData', JSON.stringify(this.responseData));
        //   this.navCtrl.push(LoginPage);
        // }
        // else {
        //   //  console.log("User already exists");
        //   this.presentToast("login not valid");
        // }
      }
        , (err) => {
          // Error log
        });
    }
    else {
      //  console.log("User already exists");
      this.presentToast("Give valid details");
    }
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  alert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['ตกลง']
    });
    alert.present();
  }
}





