import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AlertController } from 'ionic-angular';

import { AddRoomPage } from '../add-room/add-room'

@IonicPage()
@Component({
  selector: 'page-privatemessage',
  templateUrl: 'privatemessage.html'
})
export class PrivatemessagePage {
 
  [x: string]: {};
  public data:any

  constructor( public navCtrl: NavController, public modalCtrl: ModalController,
    public authService: AuthServiceProvider, public alertCtrl: AlertController,) {
   
  }
  
  ionViewDidLoad() {
    this.messageData();
  }

  addRoom() {
    console.log("addroom");
    this.navCtrl.push(AddRoomPage);
  }

  messageData() {
    this.authService.messageGetData(this.data,'getPrivateMessage').then((result) => {
      this.data_result = result['data'];
      console.log(this.data_result);
    }, (err) => {
      console.log(err);
    });
  }

  joinRoom(key) {
    console.log("key",key);
    // this.navCtrl.setRoot(HomePage, {
    //   key: key,
    //   nickname: this.navParams.get("nickname")
    // });
  }
 
}

