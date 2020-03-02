import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListPage } from './todo-list.page';
import { CreateTaskPage } from './create-task/create-task.page';
import { ListTasksPage } from './list-tasks/list-tasks.page';
import { SingleTaskComponent } from './list-tasks/single-task/single-task.component';

// FOOTER ROUTES
const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListPage,
    children: [
      { path: '', component: ListTasksPage }, // url: todo-list/
      { path: 'create-task', component: CreateTaskPage },
      { path: 'single-task/:id', component: SingleTaskComponent } // url: todo-list/single-task
    ]
  }
];

// TABS ROUTES
/* const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListPage,
    children: [
      {
        path: 'list-tasks',
        children: [
          {
            path: '',
            loadChildren: './list-tasks/list-tasks.module#ListTasksPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/todo-list/list-tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/todo-list/list-tasks',
    pathMatch: 'full'
  }
]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPageRoutingModule {}
