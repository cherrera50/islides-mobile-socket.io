webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrainstormingItemSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_brainstorming_item_list_simple_brainstorming_item_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrainstormingItemSelectorPage = /** @class */ (function () {
    function BrainstormingItemSelectorPage(navCtrl, navParams, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.brainstormingItem = {};
        this.items = [
            'Sticky Note',
            'Hexagon',
            'Chevron',
            'Arrow',
            'Speech Bubble'
        ];
        this.itemType = this.navParams.get('itemType');
        this.itemName = this.navParams.get('itemName');
        this.username = this.navParams.get('username');
        this.socket.emit("socketIOMessage", { message: 'remoteClientConnected', user: this.username });
    }
    BrainstormingItemSelectorPage.prototype.itemSelected = function (item) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__simple_brainstorming_item_list_simple_brainstorming_item_list__["a" /* SimpleBrainstormingItemListPage */], { itemType: this.itemType, itemName: item });
    };
    BrainstormingItemSelectorPage.prototype.logout = function () {
        this.socket.emit("socketIOMessage", { message: 'remoteClientDisconnected', user: this.username });
        this.navCtrl.pop();
    };
    BrainstormingItemSelectorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrainstormingItemSelectorPage');
    };
    BrainstormingItemSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brainstorming-item-selector',template:/*ion-inline-start:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/brainstorming-item-selector/brainstorming-item-selector.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Brainstorming Type Selector</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list inset>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/brainstorming-item-selector/brainstorming-item-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], BrainstormingItemSelectorPage);
    return BrainstormingItemSelectorPage;
}());

//# sourceMappingURL=brainstorming-item-selector.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/brainstorming-item-selector/brainstorming-item-selector.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleBrainstormingItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_simple_brainstorming_item_add_simple_brainstorming_item__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimpleBrainstormingItemListPage = /** @class */ (function () {
    function SimpleBrainstormingItemListPage(navCtrl, navParams, alertCtrl, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.islidesItems = [];
        this.itemType = this.navParams.get('itemType');
        this.itemName = this.navParams.get('itemName');
        /* Request items */
        this.socket.emit("socketIOMessage", { message: 'requestItems' });
        /* Receives messages */
        this.getMessages().subscribe(function (data) {
            if (data.message.message === 'getItems') {
                _this.islidesItems = [];
                for (var i = 0; i < data.message.items.length; i++) {
                    _this.islidesItems.push({
                        index: data.message.items[i].index,
                        type: data.message.items[i].type,
                        text: data.message.items[i].text,
                        color: data.message.items[i].color
                    });
                }
            }
        });
    }
    SimpleBrainstormingItemListPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    SimpleBrainstormingItemListPage.prototype.gotoAddSimpleBrainstormingItemPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_simple_brainstorming_item_add_simple_brainstorming_item__["a" /* AddSimpleBrainstormingItemPage */], { itemType: this.itemType, itemName: this.itemName });
    };
    SimpleBrainstormingItemListPage.prototype.deleteItem = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm Item Deletion',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        _this.socket.emit("socketIOMessage", { message: 'deleteItem', itemId: index });
                        console.log('OK clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SimpleBrainstormingItemListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SimpleBrainstormingItemListPage');
    };
    SimpleBrainstormingItemListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-simple-brainstorming-item-list',template:/*ion-inline-start:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/simple-brainstorming-item-list/simple-brainstorming-item-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ itemName }} Item List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotoAddSimpleBrainstormingItemPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n      <ng-container *ngFor="let item of islidesItems; let i = index">\n        <ion-item *ngIf="item.type === this.itemType" [ngStyle]="{\'background-color\': item.color}">\n          <h2 [innerHtml]="item.text"></h2>\n          <button (click)="deleteItem(i)" ion-button clear item-end>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-item>\n      </ng-container>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/simple-brainstorming-item-list/simple-brainstorming-item-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], SimpleBrainstormingItemListPage);
    return SimpleBrainstormingItemListPage;
}());

//# sourceMappingURL=simple-brainstorming-item-list.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSimpleBrainstormingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSimpleBrainstormingItemPage = /** @class */ (function () {
    function AddSimpleBrainstormingItemPage(navCtrl, navParams, socket, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.alertCtrl = alertCtrl;
        this.brainstormingItem = {};
        this.colors = ['#fdf4ad', '#ede834', '#fed614', '#2abdb5', '#fab34f', '#71cac4', '#f175ac', '#f04d37', '#f8bac4', '#e64b9b'];
        this.color = '#fdf4ad';
        this.itemType = this.navParams.get('itemType');
        this.itemName = this.navParams.get('itemName');
    }
    AddSimpleBrainstormingItemPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    AddSimpleBrainstormingItemPage.prototype.prepareColorSelector = function () {
        var _this = this;
        setTimeout(function () {
            var buttonElements = document.querySelectorAll('div.alert-radio-group button');
            if (!buttonElements.length) {
                _this.prepareColorSelector();
            }
            else {
                for (var index = 0; index < buttonElements.length; index++) {
                    var buttonElement = buttonElements[index];
                    var optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                    var color = optionLabelElement.innerHTML.trim();
                    if (_this.isHexColor(color)) {
                        buttonElement.classList.add('colorselect', 'color_' + color.slice(1, 7));
                        if (color == _this.color) {
                            buttonElement.classList.add('colorselected');
                        }
                    }
                }
            }
        }, 100);
    };
    AddSimpleBrainstormingItemPage.prototype.isHexColor = function (color) {
        var hexColorRegEx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        return hexColorRegEx.test(color);
    };
    AddSimpleBrainstormingItemPage.prototype.selectColor = function (color) {
        var buttonElements = document.querySelectorAll('div.alert-radio-group button.colorselect');
        for (var index = 0; index < buttonElements.length; index++) {
            var buttonElement = buttonElements[index];
            buttonElement.classList.remove('colorselected');
            if (buttonElement.classList.contains('color_' + color.slice(1, 7))) {
                buttonElement.classList.add('colorselected');
            }
        }
    };
    AddSimpleBrainstormingItemPage.prototype.setColor = function (color) {
        console.log('Selected Color is', color);
    };
    AddSimpleBrainstormingItemPage.prototype.addItem = function (brainstormingItem) {
        if (brainstormingItem.text !== undefined) {
            this.socket.emit('socketIOMessage', {
                message: 'addItem',
                type: this.itemType,
                text: brainstormingItem.text,
                color: this.color
            });
            brainstormingItem = {};
            this.navCtrl.pop();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please insert text',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    AddSimpleBrainstormingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSimpleBrainstormingItemPage');
    };
    AddSimpleBrainstormingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-simple-brainstorming-item',template:/*ion-inline-start:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/add-simple-brainstorming-item/add-simple-brainstorming-item.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add {{itemName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Text</ion-label>\n    <ion-input type="text" [(ngModel)]="brainstormingItem.text"></ion-input>\n  </ion-item>\n\n  <ion-list>\n    <ion-row class="colorselect color_{{color.slice(1,7)}}">\n      <ion-item>\n        <ion-label class="primarylabel">Color</ion-label>\n        <ion-select (click)="prepareColorSelector()" (ionChange)="setColor(this.color)" [(ngModel)]="color">\n          <ion-option (ionSelect)="selectColor(optioncolor)" *ngFor="let optioncolor of colors" [value]="optioncolor">{{optioncolor}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n\n  <button ion-button block (click)="addItem(brainstormingItem)">Add {{itemName}}</button>\n\n</ion-content>'/*ion-inline-end:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/add-simple-brainstorming-item/add-simple-brainstorming-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddSimpleBrainstormingItemPage);
    return AddSimpleBrainstormingItemPage;
}());

//# sourceMappingURL=add-simple-brainstorming-item.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brainstorming_item_selector_brainstorming_item_selector__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, socket, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.alertCtrl = alertCtrl;
        this.brainstormingItem = {};
        this.username = '';
        this.serverResponse = false;
        this.socket.on('connect', function () {
            _this.serverResponse = true;
        });
        this.socket.on('disconnect', function () {
            _this.serverResponse = false;
        });
    }
    HomePage.prototype.loginUser = function () {
        if (/^[a-zA-Z0-9]+$/.test(this.username)) {
            // all was ok
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__brainstorming_item_selector_brainstorming_item_selector__["a" /* BrainstormingItemSelectorPage */], {
                username: this.username
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Invalid Username',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      iSlides Mobile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text" [(ngModel)]="username"></ion-input>\n  </ion-item>\n  <button ion-button block [disabled]="this.serverResponse === false" (click)="loginUser()">Connect</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_simple_brainstorming_item_add_simple_brainstorming_item__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_simple_brainstorming_item_list_simple_brainstorming_item_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_brainstorming_item_selector_brainstorming_item_selector__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var config = { url: 'http://192.168.1.104:4500', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_simple_brainstorming_item_add_simple_brainstorming_item__["a" /* AddSimpleBrainstormingItemPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_simple_brainstorming_item_list_simple_brainstorming_item_list__["a" /* SimpleBrainstormingItemListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_brainstorming_item_selector_brainstorming_item_selector__["a" /* BrainstormingItemSelectorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/brainstorming-item-selector/brainstorming-item-selector.module#BrainstormingItemSelectorPageModule', name: 'BrainstormingItemSelectorPage', segment: 'brainstorming-item-selector', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_simple_brainstorming_item_add_simple_brainstorming_item__["a" /* AddSimpleBrainstormingItemPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_simple_brainstorming_item_list_simple_brainstorming_item_list__["a" /* SimpleBrainstormingItemListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_brainstorming_item_selector_brainstorming_item_selector__["a" /* BrainstormingItemSelectorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/cesar/ionic/Projects/islides-mobile-socket.io/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map