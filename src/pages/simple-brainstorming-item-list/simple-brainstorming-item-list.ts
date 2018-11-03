import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddSimpleBrainstormingItemPage } from '../add-simple-brainstorming-item/add-simple-brainstorming-item';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-simple-brainstorming-item-list',
  templateUrl: 'simple-brainstorming-item-list.html',
})
export class SimpleBrainstormingItemListPage {

  itemType;
  itemName;
  islidesItems: object[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private socket: Socket) {
    this.itemType = this.navParams.get('itemType');
    this.itemName = this.navParams.get('itemName');
    /* Request items */
    this.socket.emit("socketIOMessage", { message: 'requestItems' });
    /* Receives messages */
    this.getMessages().subscribe((data: any) => {
      if (data.message.message === 'getItems') {
        this.islidesItems = [];
        for (let i = 0; i < data.message.items.length; i++) {
          this.islidesItems.push({
            index: data.message.items[i].index,
            type: data.message.items[i].type,
            text: data.message.items[i].text,
            color: data.message.items[i].color
          });
        }
      }
    });
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
    });
    return observable;
  }

  gotoAddSimpleBrainstormingItemPage() {
    this.navCtrl.push(AddSimpleBrainstormingItemPage, { itemType: this.itemType, itemName: this.itemName });
  }

  deleteItem(index: number) {
    const confirm = this.alertCtrl.create({
      title: 'Confirm Item Deletion',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.socket.emit("socketIOMessage", { message: 'deleteItem', itemId: index });
            console.log('OK clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleBrainstormingItemListPage');
  }

}
