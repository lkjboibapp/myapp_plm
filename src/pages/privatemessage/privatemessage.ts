import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { AddRoomPage } from '../add-room/add-room'

@IonicPage()
@Component({
  selector: 'page-privatemessage',
  templateUrl: 'privatemessage.html'
})
export class PrivatemessagePage {
 
  constructor( public navCtrl: NavController, public modalCtrl: ModalController) {
   
  }
  
  ionViewDidLoad() {
  }

  addRoom() {
    console.log("addroom");
    this.navCtrl.push(AddRoomPage);
  }


 
}

