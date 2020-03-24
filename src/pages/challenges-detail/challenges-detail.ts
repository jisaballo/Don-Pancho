import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@IonicPage()
@Component({
  selector: 'page-challenges-detail',
  templateUrl: 'challenges-detail.html',
})
export class ChallengesDetailPage {

  mode: string = 'offline';
  base64Image: any = null;
  step1: boolean = false;
  step2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengesDetailPage');
  }

  takePicture() {
    if(this.mode == 'online') {
      this.takePictureOnline();
    } else {
      this.takePictureOffline();
    }
  }

  takePictureOnline() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

      if(this.base64Image != null) {
        this.step1 = true;
      }

    }, (err) => {
     // Handle error
    });
  }

  takePictureOffline() {
    this.base64Image = 'Hola';
    if(this.base64Image != null) {
      this.step1 = true;
    }
  }

  sendMission() {
    this.presentToast('Su misión se ha enviado');
    this.step2 = true;
  }

  presentToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
