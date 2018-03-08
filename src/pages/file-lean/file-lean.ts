import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
/**
 * Generated class for the FileLeanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-lean',
  templateUrl: 'file-lean.html',
})
export class FileLeanPage {


  public resultsLessonFile: any;

  public vdoFile: any;

  constructor(public http: Http,
    public navCtrl: NavController, public navParams: NavParams) {


  }

  ngAfterViewInit() {
    this.LessonVDO();

    this.vdoFile = this.navParams.get("id");

  }

  LessonVDO() {

    console.log("testvdo")
    let path = 'http://localhost/Service/ServiceMobile/ServiceFile.php/getFile/'+this.navParams.get("id");
    let encodedPath = encodeURI(path);
    // let timeoutMS = 2000;

    this.http.get(encodedPath)
      // .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        this.resultsLessonFile = data.data;
        console.log("show resultsLessonFile = ", this.resultsLessonFile);
      },
        err => {
          console.log("err json load");
        });

  }
}
