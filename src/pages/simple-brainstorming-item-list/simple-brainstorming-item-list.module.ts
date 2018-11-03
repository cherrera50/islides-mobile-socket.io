import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleBrainstormingItemListPage } from './simple-brainstorming-item-list';

@NgModule({
  declarations: [
    SimpleBrainstormingItemListPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleBrainstormingItemListPage),
  ],
})
export class SimpleBrainstormingItemListPageModule {}
