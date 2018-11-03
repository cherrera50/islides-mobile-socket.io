import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimpleBrainstormingItemListPage } from '../simple-brainstorming-item-list/simple-brainstorming-item-list';
import { Socket } from 'ng-socket-io';
import { BrainstormingItem } from '../../models/brainstorming/brainstorming-item-interface';

@IonicPage()
@Component({
  selector: 'page-brainstorming-item-selector',
  templateUrl: 'brainstorming-item-selector.html',
})
export class BrainstormingItemSelectorPage {

  brainstormingItem = {} as BrainstormingItem;
  itemType;
  itemName;
  username;

  items = [
    'Sticky Note',
    'Hexagon',
    'Chevron',
    'Arrow',
    'Speech Bubble'
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socket: Socket) {
    this.itemType = this.navParams.get('itemType');
    this.itemName = this.navParams.get('itemName');
    this.username = this.navParams.get('username');
    this.socket.emit("socketIOMessage", { message: 'remoteClientConnected', user: this.username });
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    switch (item) {
      case 'Sticky Note':
        this.itemType = 'canvas-postit';
        break;
      case 'Hexagon':
        this.itemType = 'shape-hexagon';
        break;
      case 'Chevron':
        this.itemType = 'shape-chevron';
        break;
      case 'Arrow':
        this.itemType = 'shape-arrow';
        break;
      case 'Speech Bubble':
        this.itemType = 'shape-speechbubble';
        break;
    }
    this.navCtrl.push(SimpleBrainstormingItemListPage, { itemType: this.itemType, itemName: item });
  }

  logout() {
    this.socket.emit("socketIOMessage", { message: 'remoteClientDisconnected', user: this.username });
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainstormingItemSelectorPage');
  }

}
