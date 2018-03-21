import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';




import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // public about: any;
  // public items_filter : any ;
  // items :any;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public http: Http) {
    // this.ETPhoneHome();
// console.log('======================================');
 }

//  ETPhoneHome() {
//    let path = 'http://112.121.150.4/ServiceMobile/about.php/getabout';
//      let encodedPath = encodeURI(path);
//      let timeoutMS = 200;

//      this.http.get(encodedPath)
//        .timeout(timeoutMS)
//        .map(res => res.json()).subscribe(data => {
//            let responseData = data;
//            this.about = responseData.data;
//         //    console.log(responseData.data);
//            console.log("about",this.about);
//        },
//            err => {
//                console.log('error in ETPhoneHome');
//            });
//          }


//          getItems(ev:any) {
//              // Reset items back to all of the items
//              // set val to the value of the searchbar
//              let val = ev.target.value;

//              // if the value is an empty string don't filter the items
//              if (val && val.trim() != '') {
//                  val = val.toLowerCase();
//                  console.log(val)

//                  // console.log("test usa", this.usability);
//                  this.about = this.about .filter((item) => {
//                      // console.log(item.usa_title.toLowerCase())
//                      return (item.about_id.toLowerCase().indexOf(val.toLowerCase()) > -1);
//                    });
//                }else if (val =='') {
//                    this.ETPhoneHome();
//      }
//  }
}


