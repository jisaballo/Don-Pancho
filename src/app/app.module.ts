import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrdersPage } from '../pages/orders/orders';
import { ChallengesPage } from '../pages/challenges/challenges';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TechnicalServicePageModule } from '../pages/technical-service/technical-service.module';
import { OrderPageModule } from '../pages/order/order.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderServiceProvider } from '../providers/loader-service/loader-service';
import { HttpClientModule } from '@angular/common/http';
import { OrderPage } from '../pages/order/order';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePage } from '../pages/profile/profile';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { ChartDetailPageModule } from '../pages/chart-detail/chart-detail.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { OrderTrackPageModule } from '../pages/order-track/order-track.module';
import { ChallengesDetailPageModule } from '../pages/challenges-detail/challenges-detail.module';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    OrdersPage,
    ChallengesPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TechnicalServicePageModule,
    OrderPageModule,
    LoginPageModule,
    ProfilePageModule,
    OrderTrackPageModule,
    ChartDetailPageModule,
    ChallengesDetailPageModule,
    ContactPageModule,
    NotificationsPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdersPage,
    ChallengesPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    LoaderServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaderServiceProvider
  ]
})
export class AppModule {}
