import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {

  news: any;
  
  constructor(public navCtrl: NavController, public http: Http) {
    this.ETPhoneHome();
    console.log('======================================');
  }
 
  
  ETPhoneHome() {
    let path = 'http://localhost/Service/ServiceMobile/ServiceDoc.php/getdocs';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;
  
    this.http.get(encodedPath)
      .timeout(timeoutMS)
      .map(res => res.json()).subscribe(data => {
        let responseData = data;
        
        this.news = responseData.data;
        
        console.log(responseData.data);
    console.log("kjnldkvanlk");
        
      },
        err => {
          console.log('error in ETPhoneHome');
        });
  }
}
