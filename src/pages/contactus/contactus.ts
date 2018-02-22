import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  data: any = {};

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public http: Http) {
    this.data.contac_by_name = '';
    this.data.contac_by_surname = '';
    this.data.contac_by_email = '';
    this.data.contac_by_tel = '';
    this.data.contac_subject = '';
    this.data.contac_detail = '';
    this.data.contac_ans_subject = '';
    this.data.create_by = '';
    this.data.contac_type = '';
    this.data.response = '';

    this.http = http;

  }

  submit() {
    var link = 'http://localhost/ServiceMobile/Service_VDO_Usability_Report_New/Contect_Us.php';
    var myData = JSON.stringify({
      contac_by_name: this.data.contac_by_name,
      contac_by_surname: this.data.contac_by_surname,
      contac_by_tel: this.data.contac_by_tel,
      contac_by_email: this.data.contac_by_email,
      contac_subject : this.data.contac_subject,
      contac_type: this.data.contac_type,      
      contac_detail: this.data.contac_detail
      // contac_ans_subject: this.data.contac_ans_subject,
      // create_by: this.data.create_by,
    });

    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log("! show data = ", this.data.response);
        
        
          let alert = this.alertCtrl.create({
            title: 'ส่งข้อความเรียบร้อยแล้ว!!!',
            buttons: ['OK']
          });
          alert.present();

          this.data.contac_by_name = '';
          this.data.contac_by_surname = '';
          this.data.contac_by_email = '';
          this.data.contac_by_tel = '';
          this.data.contac_subject = '';
          this.data.contac_detail = '';
          this.data.contac_ans_subject = '';
          this.data.create_by = '';
          this.data.contac_type = '';
          this.data.response = '';
      }, error => {
        console.log("Oooops!");
      });
  }
}

