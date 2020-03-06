import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PomodoroTechniquePage } from './pomodoro-technique.page';

const routes: Routes = [
  {
    path: '',
    component: PomodoroTechniquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PomodoroTechniquePageRoutingModule {}
