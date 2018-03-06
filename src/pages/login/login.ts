import { Component, ViewChild } from '@angular/core';
import { NavController,IonicPage,NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { ELearningPage } from '../e-learning/e-learning';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public NavPar: NavParams) {
   
  
  }
  LoginPage(){
    this.navCtrl.push(RegisterPage);
  }
  ELearningPage(){
    this.navCtrl.push(ELearningPage);
  }
  Login(){
    if(this.uname.value=="admin",this.password.value=="admin"){
      
    }
}
}
