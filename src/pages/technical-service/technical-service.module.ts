import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnicalServicePage } from './technical-service';

@NgModule({
  declarations: [
    TechnicalServicePage,
  ],
  imports: [
    IonicPageModule.forChild(TechnicalServicePage),
  ],
})
export class TechnicalServicePageModule {}
