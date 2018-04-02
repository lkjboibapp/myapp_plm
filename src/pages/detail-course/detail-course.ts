import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App, ViewController, Item } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { CourServiceProvider } from '../../providers/cour/cour-service';
import { FileLeanPage } from '../file-lean/file-lean';
import { PretestPageModule } from '../pretest/pretest.module';
import { PosttestPage } from '../posttest/posttest';
import { ExamsPageModule } from '../exams/exams.module';


@Component({
  selector: 'page-detail-course',
  templateUrl: 'detail-course.html',
})
export class DetailCoursePage {

  pet: string = "puppies";
  //ตัวแปลรับค่าจาก html
  file: any = {};
  public manage: any;
  public results_course: any; //  ส่วนดึงข้อมมูลจาก database ตาราง tbl lesson
  public data_temp: any; //  ส่วนดึงข้อมมูลจาก database ตาราง temp_  
  public course_detail: any;
  public course_title: any;
  public course_short_title: any;
  public course_picture: any;
  i: string;
  public user: any;
  public data: any;

  constructor(public http: Http, public courService: CourServiceProvider,
              private alertCtrl: AlertController, public navCtrl: NavController,
              public navParams: NavParams, public viewCtrl: ViewController,
              public appCtrl: App) 
      {
        this.data = this.navParams.get('item');
        this.course_detail = this.data.course_detail;
        this.course_title = this.data.course_title;
        this.course_title = this.data.course_title;
        this.data = JSON.parse(localStorage.getItem('userData'));
        this.user = this.data.data;
      }


  ionViewDidLoad() {
    this.CourseOnline();
    this.temp_quiz();
    this.ApiManage();
  }

  toggleSection(i) {//i คือ ?
    // console.log("item=>", item);
    this.results_course[i].open = !this.results_course[i].open;
  }

  isPretestState($lesson_id) {

  }

  //start service
  //api (tbl_temp_quiz)
  ApiManage() {
    var id = { id: this.data.course_id };
    this.courService.Manage(id, 'get').then((result) => {
      this.manage = result['data'];
      console.log("result->", this.manage);
    }, (err) => {
      console.log(err);
    });
  }

  temp_quiz() {
    var user_id = { user_id: this.user.id };
    this.courService.temp_quiz(user_id, 'checkQuiz').then((result) => {
      this.data_temp = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  //api lesson (tbl_lesson)
  CourseOnline() {
    var course_id = { course_id: this.data.course_id };
    this.courService.getLesson(course_id, 'getLesson').then((result) => {
      this.results_course = result['data'];
    }, (err) => {
      console.log(err);
    }); 
  }

  //end service

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
    this.data_temp.forEach(lesson_id => {
      if (id.id == lesson_id.lesson) {
        console.log("id->", id.id);
        console.log("=if=");
        this.navCtrl.push('PretestPage', {
          id: id.id,
        });
      } else {
        console.log("else");
        this.navCtrl.push('ExamsPage', { id: id.id });
      }
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
