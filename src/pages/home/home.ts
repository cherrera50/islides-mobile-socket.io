import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BrainstormingItemSelectorPage } from '../brainstorming-item-selector/brainstorming-item-selector';
import { Socket } from 'ng-socket-io';
import { BrainstormingItem } from '../../models/brainstorming/brainstorming-item-interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  brainstormingItem = {} as BrainstormingItem;
  username = '';
  serverResponse = false;
  error;

  constructor(public navCtrl: NavController,
    private socket: Socket,
    public alertCtrl: AlertController) {

    this.socket.on('connect', () => {
      this.serverResponse = true;
    });

    this.socket.on('disconnect', () => {
      this.serverResponse = false;
    });
  }

  loginUser() {
    if (/^[a-zA-Z0-9]+$/.test(this.username)) {

      // all was ok
      this.navCtrl.push(BrainstormingItemSelectorPage, {
        username: this.username
      })

    } else {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Invalid Username',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
