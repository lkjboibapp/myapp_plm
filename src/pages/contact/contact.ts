import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EditprofilePage } from '../editprofile/editprofile';
import { ELearningPage } from '../e-learning/e-learning';
import { LoginPage } from "../login/login";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

 public result_contact: any;
  userDetails: any;

  prefix: any;
  name: any;
  lastname: any;
  email: any;
  idcard: any;
  orgchat: any;
  departmaent: any;
  job: any;

  constructor(private loadingCtrl: LoadingController, public authService: AuthServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.rePage();


    const data = JSON.parse(localStorage.getItem('userData'));


    this.userDetails = data;
    console.log("this.userDetails11111->",this.userDetails);
    let Details = this.userDetails.data;
    this.email = Details.email;
    this.orgchat = Details.orgchat_lv2;


    console.log("result_contact99999->",this.result_contact);
    
   


  }

  queryContact() {
    let Qdata = this.userDetails.data;
    var user_id = { user_id: Qdata.id };
    this.authService.contactData(user_id, 'getProfile').then((result) => {
    this.result_contact = result;
      
    }, (err) => {
      console.log(err);
    });
  }

  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "กรุณารอสักครู่...",
      duration: 500
    })
    loader.onDidDismiss(() => {
      this.alertLogin();
      this.queryContact();
      
      // let Qperfix = this.result_contact;
      // let data = Qperfix['data'];
      // console.log(" Qperfix->",data);

      // this.prefix = Qperfix.position;
      // // this.orgchat = Details.orgchat_lv2;
      // console.log(" this.prefix->",   Qperfix.title_id);

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

  logoutPage() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'กด ตกลง เพื่อออกจากระบบ!!!',
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.setRoot(ELearningPage);
          return localStorage.setItem('userData', null);
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

  editprofilePage() {
    this.navCtrl.push(EditprofilePage);
  }
}
