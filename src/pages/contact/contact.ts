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
  public data_id: any;
  public data: any; 
  public result: any;
  public result_contact: any;
  userDetails: any;
  result_con_con:any;

  email: any;
  orgchart: any;

  ch_prefix: any;
  prefix: any;
  name: any;
  lastname: any;
  idcard: any;
  departmaent: any;
  job: any;

  constructor(private loadingCtrl: LoadingController, public authService: AuthServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.rePage();
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log("data",data);
    this.userDetails = data;
    console.log("this.userDetails",this.userDetails);
    let Details = this.userDetails.data;
    this.email = Details.email;
    this.orgchart = Details.orgchart_lv2;
  
    this.queryContact();
  }

  queryContact() {
    let Qdata = this.userDetails.data;
    var user_id = { user_id: Qdata.id };
    this.authService.contactData(user_id, 'getProfile')
    .then((result) => {
    this.result_contact = result;
    let result_con_con = this.result_contact.data[0];
    let ch_prefix = result_con_con.title_id;//3
    if(ch_prefix == 1){
      this.prefix = "นาย";
    } 
   else if(ch_prefix==2){
      this.prefix = "นาง";
    } 
    else{
      this.prefix = "นางสาว";
    }
    this.name = result_con_con.firstname;
    this.lastname = result_con_con.lastname;
    this.idcard = result_con_con.identification;
    this.departmaent = result_con_con.company;
    this.job = result_con_con.occupation;
    }, (err) => {
      console.log(err);
    });
  }

  rePage() {
    console.log("ทำงานน่ะ1");
    let lodepage = this.loadingCtrl.create({
      spinner: "ios",
      content: "กรุณารอสักครู่...",
      duration: 500
    })
    console.log("ทำงานน่ะ2");
    lodepage.onDidDismiss(() => {
      console.log("ทำงานน่ะ3");
      this.alertLogin();
    });
    console.log("ทำงานน่ะ4");
    lodepage.present();

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
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    } else {
      console.log("ล๊อกอินแล้ว");
      this.queryContact();
      
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
