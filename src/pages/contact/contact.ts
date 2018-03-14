import { Component } from '@angular/core';
import { NavController ,AlertController,LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';
import{EditprofilePage} from '../editprofile/editprofile';
import { ELearningPage } from '../e-learning/e-learning';
import { LoginPage } from "../login/login";
import { DashboardPage } from "../dashboard/dashboard";

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
      content: "Loading Please Wait...",
      duration: 500
    })
    loader.onDidDismiss(() => {
      // console.log('Dismissed loading หยุดทำงานตัวโหลด เสดแล้วเรียก alert() ');
      this.alertLogin();
    });

    loader.present();
    // this.alertLogin();
  }

  //จะทำงานต่อจาก constructor เป็นลำดับที่ 2
  alertLogin() {
    if (this.userDetails == null) {

      let alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: 'กรุณา Login ก่อนนะครับ',
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.push(LoginPage)
            console.log("inter OK");
            // Your Imagination should go here
          }
        }, {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.push(DashboardPage);
          }
        }
        ]
      });
      alert.present();
    } else {
      console.log("lkdcopdkcopdkc")
    }
  }
  
  logoutPage(){
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'ต้องออกจากระบบใช่ไหม!!!',
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          console.log("inter OK");
          console.log("ทำงาน1");
          this.navCtrl.setRoot(ELearningPage);
          return localStorage.setItem('userData',null);
            // this.navCtrl.pop();
            console.log("ทำงาน2");
        }
      }, {
        text: 'ยกเลิก',
        handler: () => {
          // this.navCtrl.push(DashboardPage);
          console.log("ไม่ออก");
          
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
