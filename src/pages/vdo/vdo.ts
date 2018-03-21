import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-vdo',
  templateUrl: 'vdo.html',
})
export class VdoPage {
  public results_filter: any;
  public results: any;
  public text: any;



  constructor(private domSanitizer:DomSanitizer,public http: Http, public navCtrl: NavController, private alertCtrl: AlertController) {
    this.ETPhoneHome();


    console.log("123", this.ETPhoneHome());

  }

  ionViewWillEnter() {

    
  }

  ETPhoneHome() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceVDO.php/getvdo';
    let encodedPath = encodeURI(path);
    // console.log(encodedPath)
    let timeoutMS = 100;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.results = data.data;
        console.log("vdo = ", this.results);
      

      },
        err => {
          console.log("ldokvopdsv");
        });
  }


  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.results = this.results.filter((item) => {

        // ในที่นี้เราค้นหาจาก name ของ item ก็กำหนด item.name ซึ่งเป็นชื่อจังหวัด
        // return (item.vdo_title.indexOf(val) > -1);
        return (item.vdo_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.ETPhoneHome();
    }
  }

  openItem(item) {
    let text = item.vdo_id;

    this.text = this.results.filter((item) => {

      // ในที่นี้เราค้นหาจาก name ของ item ก็กำหนด item.name ซึ่งเป็นชื่อจังหวัด
      // return (item.vdo_title.indexOf(val) > -1);
      return (item.vdo_id.toLowerCase().indexOf(text.toLowerCase()) > -1);
    });

    console.log("show text =", this.text);
    //   let alert = this.alertCtrl.create({
    //     title:'alert',
    //     subTitle: item.vdo_title,
    //     buttons: ['OK']
    //   });
    //   alert.present();
  }
}
