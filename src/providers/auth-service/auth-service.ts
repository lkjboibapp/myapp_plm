import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


let banService = 'http://localhost/service/ServiceMobile/Service_Imgslide.php/';
let apiUrl = 'http://localhost/Service/ServiceMobile/login.php/';
let contactUrl = 'http://localhost/Service/ServiceMobile/ServiceContact.php/';
var Private_Message = 'http://localhost/service/ServiceMobile/Private_Message.php/';
var Private_Message_return = 'http://localhost/Service/ServiceMobile/Private_Message_return.php/';
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  Message_return(credentials, type) {
    console.log("Message_return ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(Private_Message_return + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  //หน้าlogin
  postData(credentials, type) {
    console.log("postData ->", credentials);
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

  //page contact service
  contactData(credentials, type) {
    console.log("contactData ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(contactUrl + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  messagePostData(credentials, type) {
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
      this.http.post(Private_Message + type,JSON.stringify(credentials),{ headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  bannerGetData(credentials, type) {
    console.log("bannerGetData", type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(banService + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }







}
