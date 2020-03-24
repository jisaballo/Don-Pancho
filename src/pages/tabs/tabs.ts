import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { ChallengesPage } from '../challenges/challenges';
import { HomePage } from '../home/home';
import { TechnicalServicePage } from '../technical-service/technical-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OrdersPage;
  tab3Root = ChallengesPage;
  tab4Root = TechnicalServicePage;

  constructor() {

  }
}
