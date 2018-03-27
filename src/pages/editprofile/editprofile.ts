import { Component } from '@angular/core';
import { NavController,NavParams,AlertController,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ContactPage } from "../contact/contact";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
  data_id:any;
  data:any;
  qdatata: any ;
  qdatatb: any ;
  public dataI ={idcard:"",email:"",course:"",perfix:"",name:"",lastname:"",department:"",job:""};
  constructor(public navParams: NavParams,public navCtrl: NavController, private http: Http,public alertCtrl: AlertController,public toastCtrl: ToastController)
  {

    // var sel = document.getElementById('scripts');

    this.qdatata = this.navParams.get('result_ta');
    let qdatatb = this.navParams.get('result_tb');
  
    this.dataI.perfix = qdatatb.title_id;
    this.dataI.name = qdatatb.firstname;
    this.dataI.lastname = qdatatb.lastname;
    this.dataI.idcard = qdatatb.identification;
    this.dataI.department = qdatatb.company;
    this.dataI.job = qdatatb.occupation;
    let Details = this.qdatata;
    this.data_id = Details.id;
  
    this.dataI.email = Details.email;
    this.dataI.course = Details.orgchart_lv2;
   
    
    


  }
  Edit(){
    

    // if (this.dataI.idcard.length == 13 && this.dataI.email && this.dataI.course && this.dataI.perfix && this.dataI.name&& this.dataI.lastname&& this.dataI.department&& this.dataI.job) {
      console.log("ทำงาน",this.dataI.idcard);
    if (this.dataI.idcard.length == 13) {
      console.log("ทำงาน");
      var link = '';//http://112.121.150.4/ServiceMobile/Register.php/InsertRegister
      var myData = JSON.stringify({

        identification: this.dataI.idcard,
        email: this.dataI.email,
        title: this.dataI.course,
        title_id: this.dataI.perfix,
        firstname: this.dataI.name,
        lastname: this.dataI.lastname,
        department: this.dataI.department,
        job: this.dataI.job,
      });
      // console.log("myData"+myData);
      this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        // console.log("! show data = ", this.data.response);
        // console.log("!userData  = ", this.userData.idcard);
  
  
        let alert = this.alertCtrl.create({
          title: 'แจ้งเตือน',
          subTitle: 'ทำการสมัครเรียนเรียบร้อยแล้ว!!!',
          buttons: ['OK']
        });
        this.navCtrl.setRoot(ContactPage);
        alert.present();
  
        // this.userData.idcard = '';
        // this.userData.email = '';
        // this.userData.course = '';
        // this.userData.perfix = '';
        // this.userData.name = '';
        // this.userData.lastname = '';
        // this.userData.department = '';
        // this.userData.job = '';
        this.data.response = '';
      }, error => {
        // console.log("Oooops!");
      });
    }
    else {
        // console.log("User already exists");
         this.presentToast("กรอกข้อมูลผิดพลาด");
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
  





