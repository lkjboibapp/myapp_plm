import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ItemsCouse } from '../../providers/providers';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/**
 * Generated class for the DetailCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-course',
  templateUrl: 'detail-course.html',
})
export class DetailCoursePage {

  public results_course: any;
  public text: any;
  public course_title: any;
  constructor(public http: Http, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, items: ItemsCouse) {
    this.course_title = navParams.get("course_title");
    console.log("param: " + this.course_title );
  }

  ngAfterViewInit() {
    this.CourseOnline();
    this.text = this.navParams.get('test');
    // console.log("123",this.text)
  }

  CourseOnline() {

    let path = 'http://localhost/Service/ServiceMobile/Course_online.php/get';
    let encodedPath = encodeURI(path);
    // let timeoutMS = 2000;

    this.http.get(encodedPath)
      // .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.results_course = data.data;
        console.log("show results_course = ", this.results_course);
      },
        err => {
          console.log("err json load");
        });
  }
}
