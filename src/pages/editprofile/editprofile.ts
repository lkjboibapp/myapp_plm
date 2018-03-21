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
  
  public selected_value:any;
  data_id:any;
  qdatata: any ;
  qdatatb: any ;
  qdatatc: any ;
  email: any;
  orgchart: any;

  data:any;

  $:any;

  ch_prefix: any;
  prefix: any;
  name: any;
  lastname: any;
  idcard: any;
  departmaent: any;
  job: any;
  constructor(public navParams: NavParams,public navCtrl: NavController, private http: Http,public alertCtrl: AlertController)
  {

    // var sel = document.getElementById('scripts');

    this.qdatata = this.navParams.get('result_ta');
    let qdatatb = this.navParams.get('result_tb');
    // let qdatatc = this.navParams.get('selected_value');
  
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

  console.log("หลักสูตร->",this.orgchart);
  console.log("คำนำหน้า->",ch_prefix);
  console.log("กลุ่มงาน->",this.job);
  
  if(this.orgchart == "1"){
console.log("นาย");

  }
 else if(this.orgchart == "2"){
  console.log("นาง");

  }
  else{
    // var index =this.orgchart;
    // console.log("index->",index);
    // oa.SelectedItem = "Profile 2";
    console.log("นางสาว");

  }

  }

  }





