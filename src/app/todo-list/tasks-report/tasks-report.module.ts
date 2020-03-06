import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksReportPageRoutingModule } from './tasks-report-routing.module';

import { TasksReportPage } from './tasks-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksReportPageRoutingModule
  ],
  declarations: [TasksReportPage]
})
export class TasksReportPageModule {}
