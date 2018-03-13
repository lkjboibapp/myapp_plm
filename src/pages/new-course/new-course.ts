import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { CourServiceProvider } from '../../providers/cour/cour-service';

@Component({
  selector: 'page-new-course',
  templateUrl: 'new-course.html',
})
export class NewCoursePage {

  public cate_id: any = ""; //post
  public course_id :any = "";
  public data: any; //เก็บข้อมูลที่รับมาจาก service
  public data_course: any;
  public filter_course: any;

  constructor(public navCtrl: NavController, public courService: CourServiceProvider, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  //จะทำงานต่อจาก constructor เป็นลำดับที่ 2
  ionViewDidLoad() {
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
    console.log(" = ", event);

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
    console.log("i =>",i);
  }

}
