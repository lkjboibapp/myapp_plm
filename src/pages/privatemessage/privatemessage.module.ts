import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivatemessagePage } from './privatemessage';

@NgModule({
  declarations: [
    PrivatemessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivatemessagePage),
  ],
})
export class PrivatemessagePageModule {}
