import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
  public USER: any;
  public data: any;
  public post_data: any = { pm_id: "", pmr_return: "", create_by: "", all_file_return_pm: "" };
  constructor(private loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.data = this.navParams.get("key");
    let id = this.navParams.get("USER");
    this.USER = id.id;
    
    this.messageData();

    console.log("user->", this.USER.id);

  }

  messageData() {
    let pm_id = { pm_id: this.data.pm_id };
    // console.log("pm_id message->", pm_id);
    this.authService.Message_return(pm_id, 'privatemassage').then((result) => {
      this.data_result = result['data'];
      console.log("return messageData->", this.data_result);
    }, (err) => {
      console.log(err);
    });
  }

  ionViewWillLeave() {
  }

  //เก็บข้อมูลที่ถูกส่งมาจากการเลือก หัวข้อเนื้อหา
  addmessage() {
    let id = this.data;
    this.post_data.pm_id = id.pm_id;
    this.post_data.create_by = id.create_by;
    console.log("addmessage->", this.post_data);

    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',
      spinner: 'dots'
    });
    loading.present();

    this.authService.Message_return_Post_PmrReturn(this.post_data, 'insertMassage').then((result) => {
      console.log("result->", result);
      this.messageData();
      this.post_data = { pm_id: "", pmr_return: "", create_by: "", all_file_return_pm: "" };
      loading.dismiss();
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
  }



}
