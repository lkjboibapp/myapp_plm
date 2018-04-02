import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourServiceProvider } from '../../providers/cour/cour-service';
import { DetailCoursePage } from '../detail-course/detail-course';

import { NewsDetailPage } from '../news-detail/news-detail';
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BannerDetailPage } from '../banner-detail/banner-detail';
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
  public data_course: any;
  public data_new: any;
  //public data_vdo :any;
  //==========
  public banners: any;
  public data_courses: any;
  public data_News: any;
  //public data_vdos: any;

  ///++++++++++++++++
  data: any;

  constructor(public courService: CourServiceProvider, public authService: AuthServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.bannerService();
    this.course();
    this.NewApi();
    //this.Vdoapi();

  }

  bannerdetail(item) {
    // console.log("item =",item);
    this.navCtrl.push(BannerDetailPage, {
      id: item
    });
  }

  getItemCourse(item: any) {
    // console.log("item ")
    this.navCtrl.push(DetailCoursePage, {
      item: item
    });
  }
  Newdetail(item) {
    localStorage.setItem('itemNew', JSON.stringify(item))
    this.navCtrl.push(NewsDetailPage);

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
  }

  //service Api start
  bannerService() {
    this.authService.bannerGetData(this.data, 'getImgslide').then((result) => {
      this.banner = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  course() {
    this.courService.Course(this.course_id, 'get').then((result) => {
      this.data_course = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  NewApi() {
    // let path = 'http://112.121.150.4/ServiceMobile/ServiceNew_v3.php/getNews';
    this.authService.NewApi('getNews').then((result) => {
      this.data_new = result['data'];
      // console.log("this.data_new->",this.data_new);
    }, (err) => {
      console.log(err);
    });
  }
  // Vdoapi() {
  //   //let path = 'http://112.121.150.4/ServiceMobile/ServiceVDO.php/getvdo';
  //   this.authService.NewApi('getvdo').then((result) => {
  //     this.data_vdo = result['data'];
  //      //console.log("this.data_vdo->",this.data_vdo);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  
  ///end call service api

  onInput(ev: any) {
    let val = ev.target.value;
    // console.log("val->", val);
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

    ///////////////////--data_new--////////////////////////////////
    if (val && val.trim() != '') {
      this.data_News = this.data_new.filter((item) => {
        return (item.cms_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.NewApi();
    }

  ///////////////////--data_vdo--////////////////////////////////
    // if (val && val.trim() != '') {
    //   this.data_vdos = this.data_vdo.filter((item) => {
    //     return (item.vdo_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   });
    // } else if (val == '') {
    //   this.Vdoapi();
    // }



  }


}
