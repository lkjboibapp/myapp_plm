import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

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
  data: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController, 
              public http: Http) 
          {
            this.http = http;
          }

  ionViewDidLoad() 
    {
      this.addroom();

      this.data.pm_to = '';
      this.data.pm_topic = '';
      this.data.pm_quest = '';
      this.data.question_status = '';
      this.data.all_file = '';
      this.data.response = '';

    }

  addroom() 
    {
      let path = 'http://localhost/service/ServiceMobile/Tbl_User.php/getUserPassWord';
      let encodedPath = encodeURI(path);
      let timeoutMS = 10000;

      this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
          let responseData = data;
          this.pm = responseData.data;
          // console.log(responseData.data);
        },
          err => {
                    console.log('error in ETPhoneHome');
                  });
    }
  submit() 
  {
    var link = 'http://localhost/service/ServiceMobile/Private_Message.php/InsertPrivateMessage'
    var myData = JSON.stringify(
      {
        pm_to: this.data.pm_to,
        pm_topic: this.data.pm_topic,
        question_status: this.data.question_status,
        pm_quest: this.data.pm_quest,
        all_file: this.data.all_file
      });

    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log("! show data = ", this.data.response);

        let alert = this.alertCtrl.create({
          title: this.data.response,
          buttons: ['OK']
        });
        alert.present();

        this.data.pm_to = '';
        this.data.pm_topic = '';
        this.data.pm_quest = '';
        this.data.question_status = '';
        this.data.all_file = '';
        this.data.response = '';
      }, error => {
        console.log("Oooops!");
      });
  }
}
