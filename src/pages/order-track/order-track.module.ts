import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderTrackPage } from './order-track';

@NgModule({
  declarations: [
    OrderTrackPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderTrackPage),
  ],
})
export class OrderTrackPageModule {}
