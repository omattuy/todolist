import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksReportPage } from './tasks-report.page';

const routes: Routes = [
  {
    path: '',
    component: TasksReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksReportPageRoutingModule {}
