import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCoursePage } from './detail-course';


// import {FileLeanPage} from '../file-lean/file-lean';

@NgModule({
  declarations: [
    DetailCoursePage,
    // FileLeanPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCoursePage),
  ],
})
export class DetailCoursePageModule {}
