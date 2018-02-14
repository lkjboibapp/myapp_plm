import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {
  public results_filter: any;
  public results: any;
  news: any;


  constructor(public http: Http, public navCtrl: NavController) {
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
        this.results = data.data;
        console.log(data)
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
  }else if (val =='') {
      this.ETPhoneHome();
    
  }
  
}
}
