import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AlertController, LoadingController } from 'ionic-angular';

import { BannerDetailPage } from '../banner-detail/banner-detail';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-banner',
  templateUrl: 'banner.html'
})
export class BannerPage {
 
  data: any;
  public data_result: any;
  constructor(public toastCtrl: ToastController,private loadingCtrl: LoadingController,public navCtrl: NavController, public authService: AuthServiceProvider, public alertCtrl: AlertController,) {
  }

  ngAfterViewInit(){
    this.bannerService();

  }

  bannerService() {
    //โหลดข้อมูลจาก service จบการทำงานตอนที่ ดาวโหลด service เรียบร้อยแล้ว 
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล..Category.',
      spinner: 'dots'
    });
    loading.present();

    this.authService.bannerGetData(this.data, 'getImgslide').then((result) => {
      this.data_result = result['data'];
      loading.dismiss();
      
    }, (err) => {
      console.log(err);
      this.presentToast("การเชื่อมต่อ..ลมแหลว")
      loading.dismiss();
      
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  bannerdetail(item){
    console.log("item =",item);
    this.navCtrl.push(BannerDetailPage,{
      id: item,
    });
  }

}
