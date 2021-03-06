import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './content/item/item.component';
import { UserProfileComponent } from './content/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'item/:id', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
