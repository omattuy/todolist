import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomodoroTechniquePageRoutingModule } from './pomodoro-technique-routing.module';

import { PomodoroTechniquePage } from './pomodoro-technique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomodoroTechniquePageRoutingModule
  ],
  declarations: [PomodoroTechniquePage]
})
export class PomodoroTechniquePageModule {}
