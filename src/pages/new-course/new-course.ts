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

  data_v1: Array<{ title: string, details: string, icon: string, showDetails: boolean }> = [];


  public cate_id: any = ""; //post
  public course_id: any = "";
  public data: any; //เก็บข้อมูลที่รับมาจาก service
  public data_course: any;
  public filter_course: any;

  userDetails: any;


  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController,
    public courService: CourServiceProvider, public navParams: NavParams,
    public alertCtrl: AlertController, public viewCtrl: ViewController) {

    this.rePage();
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;

    //////////
    for (let i = 0; i < 5 ; i++) {
      this.data_v1.push({
        title: 'Title ' + i,
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }

    /////////

  }

  //จะทำงานก็ต่อเมื่อโหลดข้อมูลเสดเรียบร้อยแล้วถึงจะทำงาน
  ngAfterViewInit() {
    
  }
  
///////// start test
  toggleDetails(data) {
    // console.log("test->",data);
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'md-arrow-dropright';
    } else {
      data.showDetails = true;
      data.icon = 'md-arrow-dropdown';
    }
  }

///////// end test


  rePage() {
    let loader = this.loadingCtrl.create({
      spinner: "ios",
      content: "Loading Please Wait...",
      duration: 30
    })
    loader.onDidDismiss(() => {
      // console.log('Dismissed loading หยุดทำงานตัวโหลด เสดแล้วเรียก alert() ');
      this.alertLogin();
    });

    loader.present();

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
            this.navCtrl.setRoot(LoginPage);
            // Your Imagination should go here
          }
        }, {
          text: 'ยกเลิก',
          handler: () => {
            this.navCtrl.setRoot(ELearningPage);
          }
        }
        ],
        // enableBackdropDismiss: false // <- Here! :)
      });
      alert.present();
    } else {
      this.CategoryCourse();
      this.courseService();
      console.log("service ok");
    }
  }
  showAlert(title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
  //call service CategoryCourse
  CategoryCourse() {
    //โหลดข้อมูลจาก service จบการทำงานตอนที่ ดาวโหลด service เรียบร้อยแล้ว 
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล..Category.',
      spinner: 'dots'
    });
    loading.present();
    this.courService.CategoryCourse(this.cate_id, 'getCategory').then((result) => {
      this.data = result['data'];
      loading.dismiss();
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
  }

  //call service course
  courseService() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล..course.',
      spinner: 'dots'
    });
    loading.present();
    //api start
    this.courService.Course(this.course_id, 'get').then((result) => {
      this.data_course = result['data'];
      loading.dismiss();
      this.filter_course = this.data_course;
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
    //end api
  }
  //Search
  getSearch(event: any) {
    console.log(" = ", event.target.value);
  }

  //select id course filter
  selectChangHandler(event: any) {
    let text = event.target.value;
    if (text && text.trim() != '') {
      this.filter_course = this.data_course.filter((item) => {
        return (item.cate_id.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
    } else if (text == ''){
      this.filter_course = this.data_course;
    }
    
  }

  //get item
  getItemCourse(i: any) {
    this.navCtrl.push(DetailCoursePage, {
      item: i
    });
  }
}
