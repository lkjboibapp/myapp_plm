import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App, ViewController, Item } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { CourServiceProvider } from '../../providers/cour/cour-service';

import { FileLeanPage } from '../file-lean/file-lean';
import { PretestPage } from '../pretest/pretest';
import { PosttestPage } from '../posttest/posttest';


@Component({
  selector: 'page-detail-course',
  templateUrl: 'detail-course.html',
})
export class DetailCoursePage {

  //ตัวแปลรับค่าจาก html
  file: any = {};

  //  ส่วนดึงข้อมมูลจาก database ตาราง tbl lesson
  public results_course: any;

  //รอรับค่าที่ส่งมา
  public course_detail: any;
  public course_title: any;

  public course_short_title: any;
  public course_picture: any;
  i: string;

  public data: any;


  constructor(public http: Http,
    public courService: CourServiceProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {


    // this.data = this.navParams.get('item');
    // this.course_detail = this.data.course_detail;
    // this.course_title = this.data.course_title;
    // this.course_title = this.data.course_title;

    // console.log("data => ", this.data.course_detail);


  }


  ionViewDidLoad() {
    this.CourseOnline();
    // this.course_title = this.navParams.get("course_title");
    // this.course_detail = this.navParams.get("course_detail");
    // this.course_short_title = this.navParams.get("course_short_title");
    // this.course_picture = this.navParams.get("course_picture");
    // this.file.lesson_id = this.navParams.get("course_id");

  }



  CourseOnline() {
    // var course_id = { course_id: this.data.course_id };
    // console.log("course 123 ->",course_id);
    // this.courService.getLesson(course_id, 'getLesson').then((result) => {
    //   this.results_course = result['data'];
    //   console.log("data ->", result['data']);
    // }, (err) => {
    //   console.log(err);
    // });

    // let path = 'http://localhost/Service/ServiceMobile/ServiceLesson.php/getLesson';
    // let encodedPath = encodeURI(path);
    // let timeoutMS = 2000;
    // this.http.get(encodedPath)
    //   .timeout(timeoutMS)
    //   .map(res => res.json()).subscribe(data => {
    //     this.results_course = data.data;
    //     console.log("show lesson = ", this.results_course);
    //   },
    //     err => {
    //       console.log("err json load");
    //     });
  }

  // ออกทุกหน้า
  pushPage() {
    console.log("test");
    // // this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().push(VdoPage);
    // asdlm:any;
  }

  openVDO(id) {
    this.navCtrl.push('FileLeanPage', {
      id: id.id,
    });
  }

  openPretest(id) {
    this.navCtrl.push('PretestPage', {
      id: id.id,
    });
  }

  openPosttest(id) {
    this.navCtrl.push('PosttestPage', {
      id: id.id,
    });
  }

  openQuestion(id) {
    this.navCtrl.push('QuestionnairePage', {
      id: id.id,
    });
  }


}
