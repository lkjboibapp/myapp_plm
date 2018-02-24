import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-course',
  templateUrl: 'course.html '
  // templateUrl: 'tabs-controller.html'
})
export class CoursePage {
  public results_filter: any;
  public results: any;
  public text: any;


  constructor(public http: Http, public navCtrl: NavController, private alertCtrl: AlertController) {
    this.ETPhoneHome();
    

    // console.log("123",this.ETPhoneHome());
  }

  ETPhoneHome() {
    let path = 'http://localhost/Service/ServiceMobile/ServiceCourse.php/getvdo';
    let encodedPath = encodeURI(path);
    // console.log(encodedPath)
    let timeoutMS = 100;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.results = data.data;
        console.log("show time = ",this.results);
      },
        err => {
          console.log("Erroersdfdf");
        });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    
    if (val && val.trim() != '') 
      {
        this.results = this.results.filter((item) => {
          
          // ในที่นี้เราค้นหาจาก name ของ item ก็กำหนด item.name ซึ่งเป็นชื่อจังหวัด
          // return (item.vdo_title.indexOf(val) > -1);
          return (item.cate_id.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }else if (val =='') {
      this.ETPhoneHome();
    }
  }

  selectChangHandler(event:any){
    console.log("selectChangHandler = ",event.target.value);
    let text = event.target.value;
    this.text = this.results.filter((item) => {

      // ในที่นี้เราค้นหาจาก name ของ item ก็กำหนด item.name ซึ่งเป็นชื่อจังหวัด
      // return (item.vdo_title.indexOf(val) > -1);
      return (item.cate_id.toLowerCase().indexOf(text.toLowerCase()) > -1);
    });

    console.log("show text =", this.text);
  }
  
}
