import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import{EditprofilePage} from '../editprofile/editprofile';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  userDetails:any;

  constructor(public navCtrl: NavController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    console.log(this.userDetails)
  }
  logoutPage(){
    // this.userDetails.clearCache();
    this.userDetails.clearAll();
    this.navCtrl.setRoot(LoginPage);
    }
  editprofilePage(){
     this.navCtrl.push(EditprofilePage);
  }
}
