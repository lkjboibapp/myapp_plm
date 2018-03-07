import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateMessageReturnPage } from './private-message-return';

@NgModule({
  declarations: [
    PrivateMessageReturnPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateMessageReturnPage),
  ],
})
export class PrivateMessageReturnPageModule {}
