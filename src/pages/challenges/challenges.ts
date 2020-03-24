import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChallengesDetailPage } from '../challenges-detail/challenges-detail';

@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html'
})
export class ChallengesPage {

  campaing: any;

  constructor(public navCtrl: NavController) {
    this.campaing = 'active';
  }

  viewActiveMission() {
    this.navCtrl.push(ChallengesDetailPage);
  }
}
