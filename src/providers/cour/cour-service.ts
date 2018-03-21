import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CourServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let CategoryCourseService = 'http://112.121.150.4/ServiceMobile/ServiceCategory.php/';
let Course = 'http://112.121.150.4/ServiceMobile/Course_online.php/';
let getLesson = 'http://112.121.150.4/ServiceMobile/ServiceLesson.php/';
let Service_fileLean ='http://112.121.150.4/ServiceMobile/ServiceFile.php//';


@Injectable()
export class CourServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CourServiceProvider Provider');
  }

  FileLean(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(Service_fileLean + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  CategoryCourse(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(CategoryCourseService + type, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  Course(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(Course + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  getLesson(credentials, type) {

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(getLesson + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
