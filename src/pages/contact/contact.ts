import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import{EditprofilePage} from '../editprofile/editprofile';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}
  editprofilePage(){
     this.navCtrl.push(EditprofilePage);
  }
}
