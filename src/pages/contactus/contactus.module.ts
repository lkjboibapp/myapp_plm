import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactusPage } from './contactus';

@NgModule({
  declarations: [
    ContactusPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactusPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContactusPage
  ]
})
export class ContactusPageModule { }
