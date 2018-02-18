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
searchGIFs() {
    // 
    this.faq.search(this.faq).then(data => {
        this.faq = data;
    });
}
}
