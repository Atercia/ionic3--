import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddThingPage } from './add-thing';

@NgModule({
  declarations: [
    AddThingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddThingPage),
  ],
})
export class AddThingPageModule {}
