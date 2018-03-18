import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, LoadingController} from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AlertController } from 'ionic-angular';

import { AddRoomPage } from '../add-room/add-room'
import { LoginPage } from "../login/login";
import { ELearningPage } from '../e-learning/e-learning';
import { PrivateMessageReturnPage } from '../private-message-return/private-message-return';

@IonicPage()
@Component({
  selector: 'page-privatemessage',
  templateUrl: 'privatemessage.html'
})
export class PrivatemessagePage {

  data_result: any;
  public data_id :any;
  public data: any 
  constructor(private loadingCtrl: LoadingController,public navCtrl: NavController, public modalCtrl: ModalController,
    public authService: AuthServiceProvider, public alertCtrl: AlertController, ) {
    
      this.rePage();
    this.data = JSON.parse(localStorage.getItem('userData'));
    this.data_id = this.data;
    // this.alertLogin();
  }

  ionViewDidLoad() {
    
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
  }

  alertLogin() {
    if (this.data_id == null) {
      let alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: 'กรุณา Login ก่อนนะครับ',
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot(LoginPage)
            // Your Imagination should go here
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
      this.messageData();
      console.log("this.data_id ไม่เท่ากับ null")
    }
  }

  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  messageData() {
    let data_id = this.data_id.data;
    let id_course = { create_by: data_id.id };
    console.log("id_course->",id_course)
    this.authService.messageGetData(id_course, 'getPrivateMessage').then((result) => {
      this.data_result = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  doRefresh(refresher) {
    this.messageData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  joinRoom(item) {
    this.navCtrl.push(PrivateMessageReturnPage, { key: item });
    // this.navCtrl.setRoot(PrivateMessageReturnPage, { key: item });   ไม่มีปุมย้อนกลับ
  }

}

