import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ELearningPage } from '../e-learning/e-learning';
import { ContactPage } from '../contact/contact';
import { NewCoursePage } from '../new-course/new-course';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {



  tab1Root: any = ELearningPage;
  tab2Root: any = NewCoursePage;
  tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController) {
  }

}
