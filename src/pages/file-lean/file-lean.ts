import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourServiceProvider} from '../../providers/cour/cour-service';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Component({
  selector: 'page-file-lean',
  templateUrl: 'file-lean.html',
})
export class FileLeanPage {


  public resultsLessonFile: any;
  public results_lean:any;
  public vdoFile: any;

  constructor(public http: Http,public ServiceCourse: CourServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) 
    {
      this.vdoFile = this.navParams.get("id");
    }

  ngAfterViewInit() {
    this.CallServiceLean();
    console.log("this.vdoFile->", this.vdoFile);
  }

  CallServiceLean() {
    var lesson_id = { lesson_id: this.vdoFile };
    // console.log("lesson_id->", lesson_id);
    this.ServiceCourse.FileLean(lesson_id, 'getFile').then((result) => {
      this.results_lean = result['data'];
      // console.log("this.results_lean->", this.results_lean);
    }, (err) => {
      console.log(err);
    });

  }

}
