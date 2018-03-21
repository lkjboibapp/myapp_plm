import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { ELearningPage } from '../e-learning/e-learning';
import { Http } from '@angular/http';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';



@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {
  public download: any;
  public items_filter : any ;
  items :any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public http: Http) { }

    ngAfterViewInit(){
      this.ETPhoneHome();
    }
    ETPhoneHome() {
      let path = 'http://112.121.150.4/ServiceMobile/ServiceDoc.php/getdocs';
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
                    this.download = this.download .filter((item) => {
                        // console.log(item.usa_title.toLowerCase())
                        return (item.dty_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                      });
                  }else if (val =='') {
                      this.ETPhoneHome();
             }
        
      }
     
    
 
  
      TabsController() {
    this.navCtrl.push(TabsControllerPage);
  }
}


