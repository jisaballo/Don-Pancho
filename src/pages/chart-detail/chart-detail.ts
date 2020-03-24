import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-chart-detail',
  templateUrl: 'chart-detail.html',
})
export class ChartDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartDetailPage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Enviar',
      message: 'Seguro desea realizar el pedido?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.presentToast();
            this.navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Tu pedido se realizó correctamente',
      duration: 3000
    });
    toast.present();
  }
}
