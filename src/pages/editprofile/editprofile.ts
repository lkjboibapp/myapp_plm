import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
  data_id: any;
  qdatata: any;
  qdatatb: any;
  public dataI = { idcard: "", email: "", course: "", perfix: "", name: "", lastname: "", departmaent: "", job: "" };
  constructor(public navParams: NavParams, public navCtrl: NavController, private http: Http, public alertCtrl: AlertController) {

    // var sel = document.getElementById('scripts');

    this.qdatata = this.navParams.get('result_ta');
    let qdatatb = this.navParams.get('result_tb');

    this.dataI.perfix = qdatatb.title_id;
    this.dataI.name = qdatatb.firstname;
    this.dataI.lastname = qdatatb.lastname;
    this.dataI.idcard = qdatatb.identification;
    this.dataI.departmaent = qdatatb.company;
    this.dataI.job = qdatatb.occupation;
    let Details = this.qdatata;
    this.data_id = Details.id;

    this.dataI.email = Details.email;
    this.dataI.course = Details.orgchart_lv2;





  }
  Edit() {
    console.log("idcard->", this.dataI.idcard);
    console.log("email->", this.dataI.email);
    console.log("course->", this.dataI.course);
    console.log("perfix->", this.dataI.perfix);
    console.log("name->", this.dataI.name);
    console.log("lastname->", this.dataI.lastname);
    console.log("departmaent->", this.dataI.departmaent);
    console.log("job->", this.dataI.job);

  }
}





