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
  faqtitle: any;
  constructor(public navCtrl: NavController, private http: Http) 
  {
  this.ETPhoneHome();
  this.ETPhoneHomeQuery();
  // console.log('คือ======================================');
  }
  ETPhoneHome() {
    let path = 'http://localhost/Service/ServiceMobile/ServiceFAQ.php/getfaq_type';
    let encodedPath = encodeURI(path);
    //  console.log("คือencodedPath"+encodedPath)path
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {
            this.faq = data.data;
        console.log("faq="+this.faq[0])
        },
        err => {
            console.log("Error");
        });
}

ETPhoneHomeQuery() {
  let path = 'http://localhost/Service/ServiceMobile/ServiceFAQ.php/getfaq';
  let encodedPath = encodeURI(path);
  //  console.log("คือencodedPath"+encodedPath)path
  let timeoutMS = 10000;

  this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
          this.faq = data.data;
      console.log("faq="+this.faq[0])
      },
      err => {
          console.log("Error");
      });
}
getItems(ev: any) {
      let val = ev.target.value;
      if (val && val.trim() != '') {
        console.log("คือgetItems"+val)
       this.faq = this.faq.filter((item) => {
        //  console.log("คือthis.faq.filter"+this.faq.filter)function filter()
         return (item.faq_type_title_TH.toLowerCase().indexOf(val.toLowerCase()) > -1);
       });
    }else if (val =='') {
        this.ETPhoneHome();
     }
   }
   toggleSection(i) {//iคือ Array
    this.faq[i].open = ! this.faq[i].open;
    console.log("คือ toggleSection"+i)
  }
  }
  
  

  

  