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
    let redioyes = (<HTMLInputElement>document.getElementById('redioyes')).checked;
    let rediono = (<HTMLInputElement>document.getElementById('rediono')).checked;
    console.log(rediono);
    if(redioyes){
      this.navCtrl.push(RegisterPage);
    }else{
      this.navCtrl.pop();
    }
  
  }
  }
  
  

  

  