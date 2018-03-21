import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { PrivatemessagePage } from '../privatemessage/privatemessage';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {

  pm: any;
  // data: any = {};

  resposeData: any;
  data = { "pm_quest": "", "question_status": "", "pm_to": "", "pm_topic": "","create_by":""};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    let data_id = data.data;
    this.data.create_by = data_id['id'];
  }

  ionViewDidLoad() {
    this.addroom();

  }

  addroom() {
    let path = 'http://112.121.150.4/ServiceMobile/Tbl_User.php/getUserPassWord';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.pm = data.data;
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }

  submit()
    {
    // console.log("this.data.create_by->", this.data.create_by);
      
    // console.log("this.data->", this.data);
      this.authService.messagePostData(this.data, 'InsertPrivateMessage').then((result) => {

        console.log("addroom result->",result);
        let alert = this.alertCtrl.create(
          {
            title: 'ส่งข้อความเรียบร้อยแล้ว!!!',
    //กดตกลงเพือย้อนกลับหน้าหลักข้อความ
            buttons: [
                        {
                          text: 'ตกลง',
                          handler: () => {
                            // this.navCtrl.push(PrivatemessagePage);
                            this.navCtrl.pop();
                            // Your Imagination should go here
                          }
                        }
                      ]
                  });
        alert.present();
      }, (err) => {
        console.log(err);
      });
    }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
