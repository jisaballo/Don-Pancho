import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  product: any;
  cantidad: number;
  valor: number;
  multiply: number = 1;
  showMultiply: boolean = false;

  favorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.product = this.navParams.get('product');
    this.cantidad = 0;
    this.valor = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  changeCant(value: number) {
    this.cantidad += value * this.multiply;
    if(this.cantidad < 0) {
      this.cantidad = 0;
    }
    this.valor = this.cantidad * 0.5;
  }

  viewMultiply () {
    if(this.showMultiply) {
      this.showMultiply = false;
    } else {
      this.showMultiply = true;
    }
  }

  sendShopCar() {
    this.navCtrl.pop();
  }

  setFavorite() {
    if(this.favorite) {
      this.favorite = false;
    } else {
      this.favorite = true;
    }
  }
}
