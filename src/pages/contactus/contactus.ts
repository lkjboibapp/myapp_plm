import { AlertController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

import { Content } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Http } from '@angular/http';


declare var google;

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  @ViewChild(Content) content: Content;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;



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

  ngAfterViewInit() {

      this.loadMap();

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
            buttons: ['ตกลง ']
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
    var uluru = { lat: 13.79129, lng: 100.596887};
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18,
      tilt: 30,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: this.map
    });

  }

}




