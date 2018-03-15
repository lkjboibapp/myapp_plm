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
        let path = 'http://localhost/Service/ServiceMobile/ServiceFAQ.php/getfaq';
        let encodedPath = encodeURI(path);
        let timeoutMS = 10000;
        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(res => res.json()).subscribe(dataf => {
                this.faqq = dataf.data;
                // console.log("TestETPhoneHome8");
            },
                err => {
                    console.log("Error");
                });
    }

    ETPhoneHomeQuery() {
      let pathh = 'http://localhost/Service/ServiceMobile/ServiceFAQ.php/getfaq_type';
      console.log("TestETPhoneHome2");
      let encodedPathh = encodeURI(pathh);
      console.log("TestETPhoneHome3");
      let timeoutMSS = 10000;
      console.log("TestETPhoneHome4");
      this.http.get(encodedPathh)
          .timeout(timeoutMSS)
          .map(ress => ress.json()).subscribe(dataa => {
            console.log("TestETPhoneHome5");
              this.faq = dataa.data;
              console.log("this.faqq คือ "+this.faqq);
          },
          err => {
              console.log("Error");
          });
    }

    getItems(ev: any) {
        console.log("คือ getItems ก่อน")
        let val = ev.target.value;
        if (val && val.trim() != '') {
            console.log("คือgetItems if ก่อน")
            this.faq = this.faq.filter((item) => {
                return (item.faq_type_title_TH.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        } else if (val == '') {
            console.log("คือgetItems else if ก่อน")
            this.ETPhoneHome();
        }
    }

    toggleSection(i) {//iคือ Array
        this.faq[i].open = !this.faq[i].open;
        console.log("คือ toggleSection i"+i)
        console.log("คือ toggleSection this.faq[i]"+this.faq[i])

    }
}





