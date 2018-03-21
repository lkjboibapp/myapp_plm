import { Component } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
  public results_filter: any;
  public results: any;
  information: any[];//ของเสีย
 
  data_id:any;
  qdatata: any ;
  qdatatb: any ;
  email: any;
  orgchart: any;

  ch_prefix: any;
  prefix: any;
  name: any;
  lastname: any;
  idcard: any;
  departmaent: any;
  job: any;
  constructor(public navParams: NavParams,public navCtrl: NavController, private http: Http,public alertCtrl: AlertController)
  {
    this.qdatata = this.navParams.get('result_ta');
    let qdatatb = this.navParams.get('result_tb');
  
    let ch_prefix = qdatatb.title_id;
    this.name = qdatatb.firstname;
    this.lastname = qdatatb.lastname;
    this.idcard = qdatatb.identification;
    this.departmaent = qdatatb.company;
    this.job = qdatatb.occupation;
    let Details = this.qdatata;
    this.data_id = Details.id;
  
    this.email = Details.email;
    this.orgchart = Details.orgchart_lv2;

  // let Qdata = this.data_id.data;
  // console.log("let QdataTEST->",this.data_id.data);
  // var user_id = { user_id: Qdata.id };
  // console.log("var user_idTEST->",user_id);

  // this.authService.contactData(user_id, 'getProfile')
  //   .then((result) => {
  //     this.result_contact = result;
  //     let result_con_con = this.result_contact.data[0];
  //     let ch_prefix = result_con_con.title_id;//3
  //     if (ch_prefix == 1) {
  //       this.prefix = "นาย";
  //     }
  //     else if (ch_prefix == 2) {
  //       this.prefix = "นาง";
  //     }
  //     else {
  //       this.prefix = "นางสาว";
  //     }
  //     this.name = result_con_con.firstname;
  //     this.lastname = result_con_con.lastname;
  //     this.idcard = result_con_con.identification;
  //     this.departmaent = result_con_con.company;
  //     this.job = result_con_con.occupation;
  console.log("email->",Details.email);
  console.log("orgchart->",Details.orgchart_lv2);
  }
  }





