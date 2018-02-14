import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';
import { ELearningPage } from '../e-learning/e-learning';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CoursePage;
  tab2Root: any = ELearningPage;
  tab3Root: any = ContactPage;
  constructor(public navCtrl: NavController) {
  }
  
}
