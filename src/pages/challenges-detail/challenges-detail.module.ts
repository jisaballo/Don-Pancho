import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChallengesDetailPage } from './challenges-detail';

@NgModule({
  declarations: [
    ChallengesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengesDetailPage),
  ],
})
export class ChallengesDetailPageModule {}
