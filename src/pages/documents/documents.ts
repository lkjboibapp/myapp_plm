import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {
  public download: any;
  public documents: any;
  public items_filter: any;
  items: any;

  //test dowload start

  imageURI: any;
  imageFileName: any;

  //test dowload end



  constructor(private transfer: FileTransfer,public navCtrl: NavController, public alerCtrl: AlertController, public http: Http, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ngAfterViewInit() {
    this.ETPhoneHome();
  }


  //test upload file
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://112.121.150.4/api/uploadImage', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        this.imageFileName = "http://112.121.150.4/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        console.log("upload err");
        
        loader.dismiss();
        this.presentToast(err);
      });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 300,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  //end test upload file
  ETPhoneHome() {
    let path = 'http://112.121.150.4/ServiceMobile/ServiceDoc.php/getdocs';
    let encodedPath = encodeURI(path);

    this.http.get(encodedPath)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        this.download = responseData.data;
        console.log("show data = ", this.download);
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      val = val.toLowerCase();
      console.log(val)

      // console.log("test usa", this.usability);
      this.download = this.download.filter((item) => {
        // console.log(item.usa_title.toLowerCase())
        return (item.dow_address.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else if (val == '') {
      this.ETPhoneHome();
    }

  }

  doAlert(item) {
    let alert = this.alerCtrl.create({
      buttons: ['Ok']
    });
    alert.present()
  }
}
