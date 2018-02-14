import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-vdo',
  templateUrl: 'vdo.html',
})
export class VdoPage {
  public news: any; // กำหนดตัวแปร สำหรับรับค่าข้อมูลจาก api

  constructor(  public navCtrl: NavController,
                public navParams: NavParams
              ) {

  }

}
