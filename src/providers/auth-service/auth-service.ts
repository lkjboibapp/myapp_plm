import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


let banService = 'http://localhost/service/ServiceMobile/Service_Imgslide.php/';
let apiUrl = 'http://localhost/Service/ServiceMobile/login.php/';
var Private_Message = 'http://localhost/service/ServiceMobile/Private_Message.php/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    console.log("credentials", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  messagePostData(credentials, type) {
    console.log("MessagePostData = ", credentials, "type = ", type);

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(Private_Message + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  messageGetData(credentials, type) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.get(Private_Message + type, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  bannerGetData(credentials, type) {
    console.log("type", type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(banService + type, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


 




}
