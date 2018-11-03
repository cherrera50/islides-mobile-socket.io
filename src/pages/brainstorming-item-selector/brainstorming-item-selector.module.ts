import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainstormingItemSelectorPage } from './brainstorming-item-selector';

@NgModule({
  declarations: [
    BrainstormingItemSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(BrainstormingItemSelectorPage),
  ],
})
export class BrainstormingItemSelectorPageModule {}
