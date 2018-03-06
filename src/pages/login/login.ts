import { Component, ViewChild } from '@angular/core';
import { NavController,IonicPage,NavParams,AlertController } from 'ionic-angular';

import { LicencePage } from '../licence/licence';
import { ELearningPage } from '../e-learning/e-learning';
import { Http } from '@angular/http';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public user: any;
  public items_filter : any ;
  items :any;
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public NavPar: NavParams,public alerCtrl: AlertController,public http: Http) {
    this.ETPhoneHome();

    console.log('======================================');
 }
 
 ETPhoneHome() {
   let path = 'http://localhost/Service/ServiceMobile/login.php/login';
     let encodedPath = encodeURI(path);
     let timeoutMS = 100;

     this.http.get(encodedPath)
       .timeout(timeoutMS)
       .map(res => res.json()).subscribe(data => {
           let responseData = data;
           this.user = responseData.data;
           // console.log("show data = ",responseData.data);
           console.log("ETPhoneHome",this.user);
       },
           err => {
               console.log('error in ETPhoneHome');
           });
         }     
         

         getItems(ev:any) {
             // Reset items back to all of the items
             // set val to the value of the searchbar
             let val = ev.target.value;
             
             // if the value is an empty string don't filter the items
             if (val && val.trim() != '') {
                 val = val.toLowerCase();
                 console.log(val)

                 // console.log("test usa", this.usability);
                 this.user = this.user .filter((item) => {
                     // console.log(item.usa_title.toLowerCase())
                     return (item.username.item.password.toLowerCase().indexOf(val.toLowerCase()) > -1);
                   });
               }else if (val =='') {
                   this.ETPhoneHome();
     }
 }
 
 
 LicencePage(){
    this.navCtrl.push(LicencePage);
  }
  ELearningPage(){
    this.navCtrl.push(ELearningPage);
  }
  ForgotPassPage(){
    this.navCtrl.push(ForgotPassPage);
  }
}




