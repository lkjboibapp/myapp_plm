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
  information: any[];//ของเสีย
  faq: any;
  faqtitle: any;
  child: any ;
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
          //  console.log("คือdata"+this.faq)
        },
        err => {
            console.log("Error");
        });
}
ETPhoneHomeQuery() {
  let path = 'http://localhost/Service/ServiceMobile/ServiceFAQ.php/getfaq';
  let encodedPath1 = encodeURI(path);
  //  console.log("คือencodedPath"+encodedPath)path
  let timeoutMS = 10000;

  this.http.get(encodedPath1)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(datat => {
          this.faqtitle = datat.datat;
        //  console.log("คือหัวข้อdata"+data)
      },
      err => {
          console.log("Error");
      });
}
getItems(ev: any) {
      let val = ev.target.value;
      if (val && val.trim() != '') {
        console.log("คือval"+val)
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
    console.log("คือ"+this.faq)
  }
  }
  
  

  

  