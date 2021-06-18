import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemOverview } from './item-overview/item-overview.component';

const itemRoutes: Routes = [
  { path: '', component: ItemOverview }
];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  declarations: [
    ItemOverview,]
})
export class ItemModule { }