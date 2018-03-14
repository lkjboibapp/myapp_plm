import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';


@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {
  public download: any;
  public documents: any;
  public items_filter : any ;
  items :any;


  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public http: Http) {
  }
    ngAfterViewInit(){
      this.ETPhoneHome();
    }
    ETPhoneHome() {
      let path = 'http://localhost/Service/ServiceMobile/ServiceDoc.php/getdocs';
        let encodedPath = encodeURI(path);

        this.http.get(encodedPath)
          .map(res => res.json()).subscribe(data => {
              let responseData = data;
              this.download = responseData.data;
              console.log("show data = ",this.download);
          },
              err => {
                  console.log('error in ETPhoneHome');
              });
            }


            getItems(ev:any) {
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
                  }else if (val =='') {
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
