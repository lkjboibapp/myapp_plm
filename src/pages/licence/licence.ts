import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import{RegisterPage} from '../register/register';

@Component({
  selector: 'page-licence',
  templateUrl: 'licence.html'
})
export class LicencePage {
  constructor(public navCtrl: NavController) {}
  nextPage(){
   this.navCtrl.push(RegisterPage);
  }
  }
  
  

  

  