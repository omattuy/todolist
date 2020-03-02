import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListPage } from './todo-list.page';
import { CreateTaskPage } from './create-task/create-task.page';
import { ListTasksPage } from './list-tasks/list-tasks.page';

// FOOTER ROUTES
const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListPage,
    children: [
      { path: '', component: ListTasksPage }, // url: todo-list/
      { path: 'create-task', component: CreateTaskPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPageRoutingModule {}
