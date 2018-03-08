import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Component({
  selector: 'page-course',
  templateUrl: 'course.html '
  // templateUrl: 'tabs-controller.html'
})
export class CoursePage {
  public results_course: any;
  public results: any;
  public text: any;

  userDetails: any;

  constructor(public http: Http, public navCtrl: NavController, private alertCtrl: AlertController) {
   

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.data;

    console.log("userDetails", this.userDetails);
  }

  ngAfterViewInit(){
    
    this.ETPhoneHome();
    this.CourseOnline();
  }

  ETPhoneHome() {
    let path = 'http://localhost/Service/ServiceMobile/ServiceCourse.php/getCategory';
    let encodedPath = encodeURI(path);
    let timeoutMS = 2000;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.results = data.data;
        //console.log("show time = ", data.data[0]['cate_id']);
      },
        err => {
          console.log("Erroersdfdf");
        });
  }

  CourseOnline() {
    let path = 'http://localhost/Service/ServiceMobile/Course_online.php/get';
    let encodedPath = encodeURI(path);
    let timeoutMS = 2000;

    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.results_course = data.data;
        // console.log("show results_course = ", this.results_course);
      },
        err => {
          console.log("err json load");
        });
  }

  getItems(ev: any) {
    let val = ev.target.value;
    console.log("t1",val);
    if (val && val.trim() != '') 
      {
        this.results = this.results.filter((item) => {
          return (item.cate_id.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }else if (val =='') {
      this.ETPhoneHome();
    }
  }


  selectChangHandler(event:any){
    console.log("selectChangHandler = ",event.target.value);
    let text = event.target.value;
    this.text = this.results_course.filter((item) => {
      return (item.cate_id.toLowerCase().indexOf(text.toLowerCase()) > -1);
    });

    // console.log("show text =", this.text);
  }

  openItem(i) {
    // console.log("i = ", i.course_detail);
    this.navCtrl.push('DetailCoursePage', {
      course_title: i.course_title,
      course_detail: i.course_detail
    });
  }
 
}
