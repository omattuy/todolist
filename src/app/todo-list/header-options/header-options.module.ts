import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderOptionsPageRoutingModule } from './header-options-routing.module';

import { HeaderOptionsPage } from './header-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderOptionsPageRoutingModule
  ],
  declarations: [HeaderOptionsPage]
})
export class HeaderOptionsPageModule {}
