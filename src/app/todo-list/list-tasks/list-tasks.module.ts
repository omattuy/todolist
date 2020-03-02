import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListTasksPageRoutingModule } from './list-tasks-routing.module';
import { ListTasksPage } from './list-tasks.page';
import { SingleTaskComponent } from './single-task/single-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTasksPageRoutingModule
  ],
  declarations: [ListTasksPage, SingleTaskComponent]
})
export class ListTasksPageModule {}
