import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoaderServiceProvider } from '../../providers/loader-service/loader-service';
import { OrderPage } from '../order/order';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ChartDetailPage } from '../chart-detail/chart-detail';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {

  products: any;

  constructor(public navCtrl: NavController, private loader: LoaderServiceProvider, 
    private modalCtrl: ModalController) {
    this.loadProducts();
  }

  loadProducts() {
   this.loader.loadProducts().then(response => {
     this.products = response['products'];
   })
  }

  presentOrderModal(product: any) {
    let profileModal = this.modalCtrl.create(OrderPage, { product } );
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

  viewChart() {
    this.navCtrl.push(ChartDetailPage);
  }
}
