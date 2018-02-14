import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-vdo',
  templateUrl: 'vdo.html',
})
export class VdoPage {
  public news: any; // กำหนดตัวแปร สำหรับรับค่าข้อมูลจาก api

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient // inject HttpClient เข้ามาใช้งาน
  ) {
    this.ETPhoneHome();
    console.log('======================================');
  }

  ETPhoneHome() {
    let path = 'http://localhost:80/ServiceMobile/Service_VDO_Usability_Report_New/ServiceVDO.php/getvdo';
    let encodedPath = encodeURI(path);
    console.log(encodedPath)
    let timeoutMS = 100;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.news = data.data;
        console.log(data)
      },
        err => {
          console.log("ldokvopdsv");
        });
      }
}
