import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@IonicPage()
@Component({
  selector: 'page-pretest',
  templateUrl: 'pretest.html',
})
export class PretestPage {

  public resultsPretest: any;
  public pretest :any;

  constructor(public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PretestPage');
  }

  ngAfterViewInit() {
  this.ResultsPretest();  

    this.pretest = this.navParams.get("id");

  }





  ResultsPretest() {

    console.log("testvdo")
    let path = 'http://localhost/Service/ServiceMobile/ServiceManage.php/getManagePre/'+this.navParams.get("id");
    let encodedPath = encodeURI(path);
    // let timeoutMS = 2000;

    this.http.get(encodedPath)
      // .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.resultsPretest = data.data;
        console.log("show resultsLessonFile = ", this.resultsPretest);
      },
        err => {
          console.log("err json load");
        });

  }
}
