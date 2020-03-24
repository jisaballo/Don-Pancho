import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartDetailPage } from './chart-detail';

@NgModule({
  declarations: [
    ChartDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartDetailPage),
  ],
})
export class ChartDetailPageModule {}
