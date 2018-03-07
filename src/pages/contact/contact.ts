import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{EditprofilePage} from '../editprofile/editprofile';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {}
  nextPage(){
      this.navCtrl.push(EditprofilePage);
  }
}
