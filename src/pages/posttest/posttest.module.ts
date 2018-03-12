import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosttestPage } from './posttest';

@NgModule({
  declarations: [
    PosttestPage,
  ],
  imports: [
    IonicPageModule.forChild(PosttestPage),
  ],
})
export class PosttestPageModule {}
