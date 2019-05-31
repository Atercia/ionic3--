import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AddThingPage} from '../add-thing/add-thing';
import {AddThingPageModule} from '../add-thing/add-thing.module'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  /* tab3Root = ContactPage; */
  tab3Root = AddThingPage;

  constructor() {

  }
}
