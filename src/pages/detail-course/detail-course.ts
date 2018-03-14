import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App, ViewController, Item, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { ELearningPage } from '../e-learning/e-learning';

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
  public data_course_id: any;

  constructor(private loadingCtrl: LoadingController, public http: Http,
    public courService: CourServiceProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {

    this.data = this.navParams.get('item');
    this.course_detail = this.data.course_detail;
    this.course_title = this.data.course_title;
    this.course_title = this.data.course_title;
    this.data_course_id = { course_id: this.data.course_id };

  }


  ionViewDidLoad() {
    this.rePage();
  }

  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "Loading Please Wait...",
      duration: 100
    })
    loader.onDidDismiss(() => {
      this.CourseOnline();
    });

    loader.present();
  }



  CourseOnline() {
    // var course_id = { course_id: this.data.course_id };
    // console.log("course 123 ->", this.data_course_id);
    this.courService.getLesson(this.data_course_id, 'getLesson').then((result) => {
      this.results_course = result['data'];
      console.log("data ->", result['data']);
    }, (err) => {
      console.log(err);
    });

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
