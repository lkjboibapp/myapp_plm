import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import{EditprofilePage} from '../editprofile/editprofile';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  userDetails:any;

  constructor(public navCtrl: NavController, public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    console.log(this.userDetails)
  }
  logoutPage(){
    // const root = this.app.getRootNav();
    // root.popToRoot();

    return localStorage.setItem('userData',null);
    }
  editprofilePage(){
     this.navCtrl.push(EditprofilePage);
  }
}
