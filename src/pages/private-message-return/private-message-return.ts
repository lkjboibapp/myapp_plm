import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public data :any;
  public active: any;
  public all_file: any;
  public create_by: any;
  public create_date: any;
  public pm_alert: any;
  public pm_id: any;
  public pm_quest: any;
  public pm_to: any;
  public pm_topic: any;
  public question_status: any;
  public update_by: any;
  public update_date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get("key");
    this.getdata();
  }

  //เก็บข้อมูลที่ถูกส่งมาจากการเลือก หัวข้อเนื้อหา
  getdata(){
    this.active = this.data.active;
    this.all_file = this.data.all_file;
    this.create_by = this.data.create_by;
    this.create_date = this.data.create_date;
    this.pm_alert = this.data.pm_alert;
    this.pm_id = this.data.pm_id;
    this.pm_quest = this.data.pm_quest;
    this.pm_to = this.data.pm_to;
    this.pm_topic = this.data.pm_topic;
    this.question_status = this.data.question_status;
    this.update_by = this.data.update_by;
    this.update_date = this.data.update_date;

    console.log(this.pm_id);
  }

}
