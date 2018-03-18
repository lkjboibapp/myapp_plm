import { Component } from '@angular/core';
import { NavController ,AlertController,LoadingController} from 'ionic-angular';
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
  data:any;
  result_contact:any;
  userDetails:any;
  
  prefix:any;
  name:any;
  lastname:any;
  email:any;
  idcard:any;
  orgchat:any;
  departmaent:any;
  job:any;

  constructor(private loadingCtrl: LoadingController,public authService: AuthServiceProvider, public navCtrl: NavController,public alertCtrl: AlertController) {
    this.rePage();
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    

   
    // this.prefix = data.result_contact.title_id;
    // this.name = data.result_contact.firstname;
    // this.lastname = data.result_contact.lastname;
    // this.email = data.userDetails.email;
    // this.idcard = data.result_contact.identification;
    // this.orgchat = data.userDetails.orgchat_lv2;
    // this.departmaent = data.result_contact.address;
    // this.job = data.result_contact.occupation;

    // this.queryContact();
    // console.log("data result ->", this.result_contact);

  
  }
// queryContact(){
//   var user_id = { user_id: this.userDetails.id };
//     this.authService.contactData(user_id, 'getProfile').then((result) => {
//     this.result_contact = result['data'];
//   }, (err) => {
//     console.log(err);
//   });
// }
  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "กรุณารอสักครู่...",
      duration: 500
    })
    loader.onDidDismiss(() => {
      this.alertLogin();
      // 
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
