import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { DetailCoursePage } from '../detail-course/detail-course';
import { AlertController } from 'ionic-angular';
import { CourServiceProvider } from '../../providers/cour/cour-service';
import { LoginPage } from "../login/login";
import { ELearningPage } from '../e-learning/e-learning';

@Component({
  selector: 'page-new-course',
  templateUrl: 'new-course.html',
})
export class NewCoursePage {

  public cate_id: any = ""; //post
  public course_id: any = "";
  public data: any; //เก็บข้อมูลที่รับมาจาก service
  public data_course: any;
  public filter_course: any;

  userDetails: any;
  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController,
    public courService: CourServiceProvider, public navParams: NavParams,
    public alertCtrl: AlertController, public viewCtrl: ViewController) {

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    // console.log(this.userDetails)


    this.rePage();

  }


  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "Loading Please Wait...",
      duration: 500
    })
    loader.onDidDismiss(() => {
      // console.log('Dismissed loading หยุดทำงานตัวโหลด เสดแล้วเรียก alert() ');
      this.alertLogin();
    });

    loader.present();
    // this.alertLogin();
  }

  //จะทำงานต่อจาก constructor เป็นลำดับที่ 2
  alertLogin() {
    if (this.userDetails == null) {

      let alert = this.alertCtrl.create({
        title: 'แจ้งเตือน',
        subTitle: 'กรุณา Login ก่อนนะครับ',
        buttons: [{
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.setRoot(LoginPage)
            // Your Imagination should go here
          }
        }, {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.setRoot(ELearningPage);
          }
        }
        ]
      });
      alert.present();
    } else {
      console.log("lkdcopdkcopdkc")
    }
  }

  //จะทำงานก็ต่อเมื่อโหลดข้อมูลเสดเรียบร้อยแล้วถึงจะทำงาน
  ngAfterViewInit() {
    this.CategoryCourse();
    this.courseService();
  }

  //call service CategoryCourse
  CategoryCourse() {
    this.courService.CategoryCourse(this.cate_id, 'getCategory').then((result) => {
      this.data = result['data'];
    }, (err) => {
      console.log(err);
    });
  }

  //call service course 
  courseService() {
    this.courService.Course(this.course_id, 'get').then((result) => {
      this.data_course = result['data'];
    }, (err) => {
      console.log(err);
    });
  }
  //Search
  getSearch(event: any) {
    console.log(" = ", event.target.value);
  }

  //select id course filter
  selectChangHandler(event: any) {
    let text = event.target.value;
    this.filter_course = this.data_course.filter((item) => {
      return (item.cate_id.toLowerCase().indexOf(text.toLowerCase()) > -1);
    });
    console.log("filter_course => " + this.filter_course)
  }

  //get item 
  getItemCourse(i: any) {
    this.navCtrl.push(DetailCoursePage, {
      item: i
    });
  }
}
