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
    faqq: any;
    constructor(public navCtrl: NavController, private http: Http) {
       this.ETPhoneHome();
       this.ETPhoneHomeQuery();
        // console.log('คือ======================================');
    }

   

    ETPhoneHome() {
        let path = 'http://112.121.150.4/ServiceMobile/ServiceFAQ.php/getfaq_type';
        let encodedPath = encodeURI(path);
        let timeoutMS = 10000;
        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(res => res.json()).subscribe(dataf => {
                this.faq = dataf.data;
            },
                err => {
                    console.log("Error");
                });
    }

    ETPhoneHomeQuery() {
      let pathh = 'http://112.121.150.4/ServiceMobile/ServiceFAQ.php/getfaq';
      let encodedPathh = encodeURI(pathh);
      let timeoutMSS = 10000;
      this.http.get(encodedPathh)
          .timeout(timeoutMSS)
          .map(ress => ress.json()).subscribe(dataa => {
              this.faqq = dataa.data;
          },
          err => {
              console.log("Error");
          });
    }

    ngAfterViewInit() {
    }

    getItems(ev: any) {
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.faq = this.faq.filter((item) => {
                return (item.faq_type_title_TH.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else if (val == '') {
            this.ETPhoneHome();
        }
    }

    toggleSection(i) {//iคือ Array
        this.faq[i].open = !this.faq[i].open;
        // console.log("คือ toggleSection this.faq[i]"+this.faq[i])

    }
}





