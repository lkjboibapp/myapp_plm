import { Component,ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  data: any = {};
  responseData: any;
  userData = { "idcard": "", "email": "", "course": "", "perfix": "", "name": "", "lastname": "", "department": "", "job": "" };

  constructor(public navCtrl: NavController,
    private http: Http,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider,
    public toastCtrl: ToastController) {
  }
  submit() {
    if (this.userData.idcard && this.userData.email && this.userData.course && this.userData.perfix && this.userData.name&& this.userData.lastname&& this.userData.department&& this.userData.job) {
      var link = 'http://localhost/service/ServiceMobile/Register.php/InsertRegister';
      var myData = JSON.stringify({
        identification: this.userData.idcard,
        email: this.userData.email,
        title: this.userData.course,
        title_id: this.userData.perfix,
        firstname: this.userData.name,
        lastname: this.userData.lastname,
        department: this.userData.department,
        job: this.userData.job,
      });
      // console.log("myData"+myData);
      this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        // console.log("! show data = ", this.data.response);
        // console.log("!userData  = ", this.userData.idcard);


        let alert = this.alertCtrl.create({
          title: 'ทำการสมัครเรียนเรียบร้อยแล้ว!!!',
          buttons: ['ตกลง']
        });
        alert.present();

        this.userData.idcard = '';
        this.userData.email = '';
        this.userData.course = '';
        this.userData.perfix = '';
        this.userData.name = '';
        this.userData.lastname = '';
        this.userData.department = '';
        this.userData.job = '';
        // this.data.contac_type = '';
        this.data.response = '';
      }, error => {
        // console.log("Oooops!");
      });
    }
    else {
      //  console.log("User already exists");
      this.presentToast("Give valid details");
    }

}
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}





