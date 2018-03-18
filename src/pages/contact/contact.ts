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
  public result_contact: any;//data_result: any;
  userDetails: any;

  email: any;
  orgchart: any;

  prefix: any;
  name: any;
  lastname: any;
  idcard: any;
  departmaent: any;
  job: any;

  constructor(private loadingCtrl: LoadingController, public authService: AuthServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.rePage();
    this.data = JSON.parse(localStorage.getItem('userData'));
    this.data_id = this.data;
    console.log(" this.data_id->" + this.data_id);
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
    if (this.data_id == null) {
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

  queryContact() {
    let data_id = this.data_id.data;
    console.log("let data_id->", this.data_id.data);
    this.email = data_id.email;
    this.orgchart = data_id.orgchart_lv2;
  

    // console.log("let Details->",Detailss);
    // let Details = this.userDetails.data;
    // console.log("let Details->", this.userDetails.data);//{id:"1",usernae:"admin",password:"1313125462315641321"}

    let id_contact = { user_id: data_id.id };
    console.log("let id_contact->",id_contact);
    this.authService.contactData(id_contact, 'getProfile').then((result) => {
      this.result_contact = this.result;
      // this.result_contact = data;      
      console.log(" this.result_contact->", this.result_contact);

    //   this.result_contact = result;
    //   console.log("this.authService->", this.result_contact.data);
    //   let Qperfix = this.result_contact;
    //   let Qdata = Qperfix.data;
    //   console.log("result->", Qdata);
    //   this.name = Qdata.Array.firstname;
    //   console.log("let name->", name);



      // let Qperfix = this.result_contact;
      // let data = Qperfix['data'];
      // console.log(" Qperfix->",data);

      // this.prefix = Qperfix.position;
      // // this.orgchat = Details.orgchat_lv2;
      // console.log(" this.prefix->",   Qperfix.title_id);

    }, (err) => {
      console.log(err);
    });
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
