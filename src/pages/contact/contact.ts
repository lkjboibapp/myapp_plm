import { Component } from '@angular/core';
import { NavController ,AlertController,LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import{EditprofilePage} from '../editprofile/editprofile';
import { ELearningPage } from '../e-learning/e-learning';
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  userDetails:any;

  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController,public alertCtrl: AlertController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    console.log(this.userDetails)

    this.rePage();
  }

  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "กรุณารอสักครู่...",
      duration: 500
    })
    loader.onDidDismiss(() => {
      this.alertLogin();
    });

    loader.present();
  }

  alertLogin() {
    if (this.userDetails == null) {

      let alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: 'กรุณาเข้าสู่ระบบ!!!',
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot(LoginPage)
          }
        }, {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.setRoot(ELearningPage);
          }
        }
        ]
      });
      alert.present();
    } else {
      // console.log("lkdcopdkcopdkc")
    }
  }
  
  logoutPage(){
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'กด ตกลง เพื่อออกจากระบบ!!!',
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.setRoot(ELearningPage);
          return localStorage.setItem('userData',null);
      
        }
      }, {
        text: 'ยกเลิก',
        handler: () => {
      
          
        }
      }
      ]
    });
    alert.present();

    
    }
  editprofilePage(){
     this.navCtrl.push(EditprofilePage);
  }
}
