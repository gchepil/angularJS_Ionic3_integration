import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import hero from '../../../../../shared/controller';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users = hero.getArray();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }
}
