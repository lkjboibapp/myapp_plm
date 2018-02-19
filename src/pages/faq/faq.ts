import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {
  public results_filter: any;
  public results: any;
  faq: any;
  constructor(public navCtrl: NavController, public http: Http) {
  this.ETPhoneHome();
  console.log('======================================');
  }

  ETPhoneHome() {
    let path = 'http://localhost/ServiceMobile/Service_VDO_Usability_Report_New/ServiceFAQ.php/getfaq_type';
    let encodedPath = encodeURI(path);
    // console.log(encodedPath)
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
            this.faq = data.data;
            console.log(data)
        },
        err => {
            console.log("Error");
        });
}
getItems(ev: any) {
      let val = ev.target.value;
      
      
      if (val && val.trim() != '') {
        console.log(val)
       this.faq = this.faq.filter((item) => {
         console.log("btes"+this.faq)
        // ในที่นี้เราค้นหาจาก name ของ item ก็กำหนด item.name ซึ่งเป็นชื่อจังหวัด
          // return (item.vdo_title.indexOf(val) > -1);
         return (item.faq_type_title_TH.toLowerCase().indexOf(val.toLowerCase()) > -1);
       });
    }else if (val =='') {
        this.ETPhoneHome();
      
     }
     
   }
  }

