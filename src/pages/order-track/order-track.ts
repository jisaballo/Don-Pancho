import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-track',
  templateUrl: 'order-track.html',
})
export class OrderTrackPage {

  star1: any;
  star2: any;
  star3: any;
  star4: any;
  star5: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.star1 = 'ios-star-outline';
    this.star2 = 'ios-star-outline';
    this.star3 = 'ios-star-outline';
    this.star4 = 'ios-star-outline';
    this.star5 = 'ios-star-outline';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderTrackPage');
  }

  setStar(val: number) {

    if(val == 1) {
      this.star1 = 'ios-star';
      this.star2 = 'ios-star-outline';
      this.star3 = 'ios-star-outline';
      this.star4 = 'ios-star-outline';
      this.star5 = 'ios-star-outline';
    } else if (val == 2){
      this.star1 = 'ios-star';
      this.star2 = 'ios-star';
      this.star3 = 'ios-star-outline';
      this.star4 = 'ios-star-outline';
      this.star5 = 'ios-star-outline';
    } else if (val == 3){
      this.star1 = 'ios-star';
      this.star2 = 'ios-star';
      this.star3 = 'ios-star';
      this.star4 = 'ios-star-outline';
      this.star5 = 'ios-star-outline';
    } else if (val == 4){
      this.star1 = 'ios-star';
      this.star2 = 'ios-star';
      this.star3 = 'ios-star';
      this.star4 = 'ios-star';
      this.star5 = 'ios-star-outline';
    } else if (val == 5){
      this.star1 = 'ios-star';
      this.star2 = 'ios-star';
      this.star3 = 'ios-star';
      this.star4 = 'ios-star';
      this.star5 = 'ios-star';
    }
  }
}
