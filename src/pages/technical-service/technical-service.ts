import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-technical-service',
  templateUrl: 'technical-service.html',
})
export class TechnicalServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  viewContact() {
    this.navCtrl.push(ContactPage);
  }
}
