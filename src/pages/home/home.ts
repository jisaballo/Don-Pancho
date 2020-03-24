import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { OrderTrackPage } from '../order-track/order-track';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    this.createChart();
  }

  viewProfile() {
    this.navCtrl.push(ProfilePage);
  }

  viewNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  createChart() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Completado", "Pendiente"],
          datasets: [{
              label: '# of Votes',
              data: [60, 40],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#f53d3d",
                  "#36A2EB"
              ]
          }]
      }

    });
  }

  viewTrackOrder() {
    this.navCtrl.push(OrderTrackPage);
  }
}
