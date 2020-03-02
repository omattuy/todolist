import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodoListPageRoutingModule } from './todo-list-routing.module';

import { CreateTaskPage } from './create-task/create-task.page';
import { ListTasksPage } from './list-tasks/list-tasks.page';
import { SingleTaskComponent } from './list-tasks/single-task/single-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoListPageRoutingModule
  ],
  declarations: [CreateTaskPage, ListTasksPage, SingleTaskComponent]
})
export class TodoListPageModule {}
