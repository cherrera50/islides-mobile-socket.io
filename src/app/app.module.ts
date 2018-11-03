import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddSimpleBrainstormingItemPage } from '../pages/add-simple-brainstorming-item/add-simple-brainstorming-item';
import { SimpleBrainstormingItemListPage } from '../pages/simple-brainstorming-item-list/simple-brainstorming-item-list';
import { BrainstormingItemSelectorPage } from '../pages/brainstorming-item-selector/brainstorming-item-selector';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://192.168.1.104:4500', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddSimpleBrainstormingItemPage,
    SimpleBrainstormingItemListPage,
    BrainstormingItemSelectorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddSimpleBrainstormingItemPage,
    SimpleBrainstormingItemListPage,
    BrainstormingItemSelectorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
