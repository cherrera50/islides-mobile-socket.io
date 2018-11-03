import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BrainstormingItem } from '../../models/brainstorming/brainstorming-item-interface';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'page-add-simple-brainstorming-item',
	templateUrl: 'add-simple-brainstorming-item.html',
})
export class AddSimpleBrainstormingItemPage {

	brainstormingItem = {} as BrainstormingItem;
	itemType;
	itemName;
	colors: Array<string> = ['#fdf4ad', '#ede834', '#fed614', '#2abdb5', '#fab34f', '#71cac4', '#f175ac', '#f04d37', '#f8bac4', '#e64b9b'];
	color: string = '#fdf4ad';

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private socket: Socket,
		public alertCtrl: AlertController) {
		this.itemType = this.navParams.get('itemType');
		this.itemName = this.navParams.get('itemName');
	}

	getMessages() {
		let observable = new Observable(observer => {
			this.socket.on('message', (data: any) => {
				observer.next(data);
			});
		});
		return observable;
	}

	prepareColorSelector() {
		setTimeout(() => {
			let buttonElements = document.querySelectorAll('div.alert-radio-group button');
			if (!buttonElements.length) {
				this.prepareColorSelector();
			} else {
				for (let index = 0; index < buttonElements.length; index++) {
					let buttonElement = buttonElements[index];
					let optionLabelElement = buttonElement.querySelector('.alert-radio-label');
					let color = optionLabelElement.innerHTML.trim();

					if (this.isHexColor(color)) {
						buttonElement.classList.add('colorselect', 'color_' + color.slice(1, 7));
						if (color == this.color) {
							buttonElement.classList.add('colorselected');
						}
					}
				}
			}
		}, 100);
	}

	isHexColor(color) {
		let hexColorRegEx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
		return hexColorRegEx.test(color);
	}

	selectColor(color) {
		let buttonElements = document.querySelectorAll('div.alert-radio-group button.colorselect');
		for (let index = 0; index < buttonElements.length; index++) {
			let buttonElement = buttonElements[index];
			buttonElement.classList.remove('colorselected');
			if (buttonElement.classList.contains('color_' + color.slice(1, 7))) {
				buttonElement.classList.add('colorselected');
			}
		}
	}

	setColor(color) {
		console.log('Selected Color is', color);

	}

	addItem(brainstormingItem: BrainstormingItem) {
		if (brainstormingItem.text !== undefined) {
			this.socket.emit('socketIOMessage', {
				message: 'addItem',
				type: this.itemType,
				text: brainstormingItem.text,
				color: this.color
			});
			brainstormingItem = {} as BrainstormingItem;
			this.navCtrl.pop();
		} else {
			const alert = this.alertCtrl.create({
				title: 'Error',
				subTitle: 'Please insert text',
				buttons: ['OK']
			  });
			  alert.present();
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddSimpleBrainstormingItemPage');
	}

}
