import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CourServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let CategoryCourseService = 'http://localhost/Service/ServiceMobile/ServiceCategory.php/';
let Course = 'http://localhost/Service/ServiceMobile/Course_online.php/';
let getLesson = 'http://localhost/Service/ServiceMobile/ServiceLesson.php/';


@Injectable()
export class CourServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CourServiceProvider Provider');
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
      this.http.post(Course + type, { headers: headers })
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
      console.log("getLesson ->", credentials)
      
      this.http.post(getLesson + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
