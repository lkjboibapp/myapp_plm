import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';
import { ELearningPage } from '../e-learning/e-learning';
import { ContactPage } from '../contact/contact';
import { NewCoursePage } from '../new-course/new-course';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {


  tab2Root: any = CoursePage;
  tab1Root: any = ELearningPage;
  tab3Root: any = ContactPage;
  tab4Root: any = NewCoursePage;
  constructor(public navCtrl: NavController) {
  }

}
