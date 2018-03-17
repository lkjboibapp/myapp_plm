import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PrivateMessageReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-private-message-return',
  templateUrl: 'private-message-return.html',
})
export class PrivateMessageReturnPage {

  public data_result: any;
  public data: any;

  constructor(public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get("key");
    this.messageData();
    this.getdata();
  }

  messageData() {
    
    let pm_id = { pm_id: this.data.pm_id };
    console.log("pm_id message->", pm_id);

    
    this.authService.Message_return(pm_id, 'privatemassage').then((result) => {
      this.data_result = result['data'];

      console.log("return message->", result);
      
    }, (err) => {
      console.log(err);
    });
  }


  //เก็บข้อมูลที่ถูกส่งมาจากการเลือก หัวข้อเนื้อหา
  getdata() {
  }



}
