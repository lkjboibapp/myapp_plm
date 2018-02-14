import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VdoPage } from './vdo';

@NgModule({
  declarations: [
    VdoPage,
  ],
  imports: [
    IonicPageModule.forChild(VdoPage),
  ],
})
export class VdoPageModule {}
