import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
@Component({
  selector: 'page-usability',
  templateUrl: 'usability.html'
})
export class UsabilityPage {
  public usability: any;
  public items_filter : any ;
  items :any;
  alert:any;
 
  

  constructor(public navCtrl: NavController,public alerCtrl: AlertController, public http: Http) {
    this.ETPhoneHome();

       console.log('======================================');
    }
    
    ETPhoneHome() {
        let path = 'http://localhost/ServiceMobile/Service_VDO_Usability_Report_New/Serviceusability.php/usability';
        let encodedPath = encodeURI(path);
        let timeoutMS = 100;

        this.http.get(encodedPath)
          .timeout(timeoutMS)
          .map(res => res.json()).subscribe(data => {
              let responseData = data;
              this.usability = responseData.data;
              // console.log(responseData.data);
              console.log("ETPhoneHome",this.usability);
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
                    this.usability = this.usability .filter((item) => {
                        // console.log(item.usa_title.toLowerCase())
                        return (item.usa_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
                      });
                  }else if (val =='') {
                      this.ETPhoneHome();
        }
    }

      doAlert(item) {
        let alert = this.alerCtrl.create({
          title: item.usa_title,
          message: item.usa_detail,
          buttons: ['Ok']
        });
        alert.present()
      }
 }
 
 
 
   


