import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourServiceProvider } from '../../providers/cour/cour-service';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {


  public course_id: any;
  public banner: any;
  public data_course:any;
  //==========
  public banners: any;
  public data_courses:any;
  ///++++++++++++++++
  data: any;

  constructor(public courService: CourServiceProvider,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.bannerService();
    this.course();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  //service Api start
  bannerService() {
    this.authService.bannerGetData(this.data, 'getImgslide').then((result) => {
      this.banner = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  course(){
    this.courService.Course(this.course_id, 'get').then((result) => {
      this.data_course = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  ///end call service api

  onInput(ev: any) {
    let val = ev.target.value;
    console.log("val->", val);
    if (val && val.trim() != '') {
      this.banners = this.banner.filter((item) => {
        return (item.imgslide_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.bannerService();
    }
///////////////////--data_courses--////////////////////////////////
    if (val && val.trim() != '') {
      this.data_courses = this.data_course.filter((item) => {
        return (item.course_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.course();
    }


    console.log("ไม่อยู่ในฟังชั้น อีฟ");
  }

 

}
