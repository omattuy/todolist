import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginLogoutPageRoutingModule } from './login-logout-routing.module';

import { LoginLogoutPage } from './login-logout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginLogoutPageRoutingModule
  ],
  declarations: [LoginLogoutPage]
})
export class LoginLogoutPageModule {}
