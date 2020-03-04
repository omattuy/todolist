import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderOptionsPage } from './header-options.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderOptionsPageRoutingModule {}
