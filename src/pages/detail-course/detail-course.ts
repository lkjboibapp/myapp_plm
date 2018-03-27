import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App, ViewController, Item } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { CourServiceProvider } from '../../providers/cour/cour-service';

import { FileLeanPage } from '../file-lean/file-lean';
import { PretestPageModule } from '../pretest/pretest.module';
import { PosttestPage } from '../posttest/posttest';


@Component({
  selector: 'page-detail-course',
  templateUrl: 'detail-course.html',
})
export class DetailCoursePage {

  pet: string = "puppies";
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
    this.data = this.navParams.get('item');
    this.course_detail = this.data.course_detail;
    this.course_title = this.data.course_title;
    this.course_title = this.data.course_title;
  }


  ionViewDidLoad() {
    this.CourseOnline();
  }

  toggleSection(i) {//iคือ Array
    // console.log("item=>", item);
    this.results_course[i].open = !this.results_course[i].open;
  }


  CourseOnline() {
    var course_id = { course_id: this.data.course_id };
    this.courService.getLesson(course_id, 'getLesson').then((result) => {
      this.results_course = result['data'];
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
    // console.log("หน้า/ ไฟล์ FileLeanPage ->");
    this.navCtrl.push(FileLeanPage, {
      id: id.id,
    });
  }

  openPretest(id) {
    console.log("PretestPage");
    this.navCtrl.push('PretestPage', {
      id: id.id,
    });
  }

  openPosttest(id) {
    console.log("PosttestPage");
    this.navCtrl.push('PosttestPage', {
      id: id.id,
    });
  }

  openQuestion(id) {
    console.log("QuestionnairePage");
    // this.navCtrl.push('QuestionnairePage', {
    //   id: id.id,
    // });
  }

  QuizPage(id) {
    console.log("QuizPage");
  }


}
