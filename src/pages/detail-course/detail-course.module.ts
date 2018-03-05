import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCoursePage } from './detail-course';

@NgModule({
  declarations: [
    DetailCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCoursePage),
  ],
})
export class DetailCoursePageModule {}
