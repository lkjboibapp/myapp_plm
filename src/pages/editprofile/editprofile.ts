import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
  public results_filter: any;
  public results: any;
  information: any[];//ของเสีย
  faq: any;
  child: any ;
  constructor(public navCtrl: NavController, private http: Http,public alertCtrl: AlertController) 
  {
  this.ETPhoneHome();
  // console.log('คือ======================================');
  }

  // ETPhoneHome() {
  //   let localData = this.http.get('assets/information.json').map(res => res.json().items);
  //   localData.subscribe(data => {
  //     this.information = data;
  //   })
  //   }
  ETPhoneHome() {
    let path = 'http://localhost/ServiceMobile/ServiceMobile/ServiceFAQ.php/getfaq_type';
    let encodedPath = encodeURI(path);
    //  console.log("คือencodedPath"+encodedPath)path
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
            this.faq = data.data;
            // console.log("คือdata"+data)[object Object]
        },
        err => {
            console.log("Error");
        });
        //1
        // let localData = this.http.get('assets/information.json').map(res => res.json().items);
        // localData.subscribe(data => {
        //   this.faq = data;
        // })
}
getItems(ev: any) {
      let val = ev.target.value;
      if (val && val.trim() != '') {
        // console.log("คือval"+val)คำค้นหา
       this.faq = this.faq.filter((item) => {
        //  console.log("คือthis.faq.filter"+this.faq.filter)function filter()
         return (item.faq_type_title_TH.toLowerCase().indexOf(val.toLowerCase()) > -1);
       });
    }else if (val =='') {
        this.ETPhoneHome();
     }
   }
   alert() {
    let alert = this.alertCtrl.create({
      title: 'ยืนยันการสมัครเรียน',
      message: "คลิกตกลงเพื่อทำการสมัครเรียน",
      buttons: [
        {
          text: 'ไม่ยอมรับ',
          role: 'cancel',
          handler: () => {
            console.log('ไม่ยอมรับ');
          }
        },
        {
          text: 'ยอมรับ',
          handler: () => {
            console.log('ยอมรับ');
          }
        }
      ]
    });
    alert.present();
   }
  }
  
  

  

  