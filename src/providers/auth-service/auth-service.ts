import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


// let banService = 'http://112.121.150.4/ServiceMobile/Service_Imgslide.php/';
// let apiUrl = 'http://112.121.150.4/ServiceMobile/login.php/';
// let contactUrl = 'http://112.121.150.4/ServiceMobile/ServiceContact.php/';
// var Private_Message = 'http://112.121.150.4/ServiceMobile/Private_Message.php/';
// var Private_Message_return = 'http://112.121.150.4/ServiceMobile/Private_Message_return.php/';
@Injectable() 
export class AuthServiceProvider {
  apiUrl: string = 'http://112.121.150.4/ServiceMobile';
  testApiUrl: string = 'http://localhost/Service/ServiceMobile'
  
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  
  NewApi(type) {
    // console.log("NewApi ->", type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.get((`${this.testApiUrl}/ServiceNew_v3.php/`) + type, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  Message_return_Post_PmrReturn(credentials, type) {
    // console.log("Message_return ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post((`${this.testApiUrl}/Private_Message_return.php/`) + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  Message_return(credentials, type) {
    // console.log("Message_return ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post((`${this.testApiUrl}/Private_Message_return.php/`) + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  //หน้าlogin
  postData(credentials, type) {
    // console.log("postData ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post((`${this.apiUrl}/login.php/`) + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  //page contact service
  contactData(credentials, type) {
    // console.log("contactData ->", credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post((`${this.apiUrl}/ServiceContact.php/`) + type, JSON.stringify(credentials), { headers: headers })
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
      this.http.post((`${this.testApiUrl}/Private_Message.php/`) + type, JSON.stringify(credentials), { headers: headers })
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
      this.http.post((`${this.testApiUrl}/Private_Message.php/`) + type,JSON.stringify(credentials),{ headers: headers })
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
      this.http.post((`${this.apiUrl}/Service_Imgslide.php/`) + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }







}
