import { AlertController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Content } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  @ViewChild(Content) content: Content;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  data: any = {};

  constructor(private googleMaps:GoogleMaps,public alertCtrl: AlertController, public navCtrl: NavController, public http: Http) {
    this.data.contac_by_name = '';
    this.data.contac_by_surname = '';
    this.data.contac_by_email = '';
    this.data.contac_by_tel = '';
    this.data.contac_subject = '';
    this.data.contac_detail = '';
    this.data.contac_ans_subject = '';
    this.data.create_by = '';
    this.data.contac_type = '';
    this.data.response = '';

    this.http = http;

  }

  submit() {
    var link = 'http://localhost/service/ServiceMobile/Contect_Us.php/InsertContectUs';
    var myData = JSON.stringify({
      contac_by_name: this.data.contac_by_name,
      contac_by_surname: this.data.contac_by_surname,
      contac_by_tel: this.data.contac_by_tel,
      contac_by_email: this.data.contac_by_email,
      contac_subject: this.data.contac_subject,
      contac_type: this.data.contac_type,
      contac_detail: this.data.contac_detail
      // contac_ans_subject: this.data.contac_ans_subject,
      // create_by: this.data.create_by,
    });

    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log("! show data = ", this.data.response);


        let alert = this.alertCtrl.create({
          title: 'ส่งข้อความเรียบร้อยแล้ว!!!',
          buttons: ['OK']
        });
        alert.present();

        this.data.contac_by_name = '';
        this.data.contac_by_surname = '';
        this.data.contac_by_email = '';
        this.data.contac_by_tel = '';
        this.data.contac_subject = '';
        this.data.contac_detail = '';
        this.data.contac_ans_subject = '';
        this.data.create_by = '';
        this.data.contac_type = '';
        this.data.response = '';
      }, error => {
        console.log("Oooops!");
      });
  }

  loadMap() {
    let element = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    let map: GoogleMap = this.googleMaps.create(element, mapOptions);

    map.addMarker({
      title: 'Location',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            //alert('clicked');
          });
      });
  }
}


