import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLogoutPage } from './login-logout.page';

const routes: Routes = [
  { path: '', component: LoginLogoutPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLogoutPageRoutingModule {}
