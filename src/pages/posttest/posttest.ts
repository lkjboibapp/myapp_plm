import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

/**
 * Generated class for the PosttestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posttest',
  templateUrl: 'posttest.html',
})
export class PosttestPage {

  public resultsPosttest: any;
  public posttest :any;

  constructor(public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {


  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PretestPage');
  // }

  ngAfterViewInit() {
  this.ResultsPretest();  

    this.posttest = this.navParams.get("id");

  }





  ResultsPretest() {

    console.log("testvdo")
    let path = 'http://112.121.150.4/ServiceMobile/ServiceManage.php/getManagePost/'+this.navParams.get("id");
    let encodedPath = encodeURI(path);
    // let timeoutMS = 2000;

    this.http.get(encodedPath)
      // .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.resultsPosttest = data.data;
        console.log("show resultsPosttest = ", this.resultsPosttest);
      },
        err => {
          console.log("err json load");
        });

  }
}