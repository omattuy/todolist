import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListPage } from './todo-list.page';
import { CreateTaskPage } from './create-task/create-task.page';
import { ListTasksPage } from './list-tasks/list-tasks.page';
import { TasksReportPage } from './tasks-report/tasks-report.page';
import { PomodoroTechniquePage } from './pomodoro-technique/pomodoro-technique.page';
import { AuthGuard } from '../services/AuthGuard';

const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListPage,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListTasksPage },
      { path: 'create-task', component: CreateTaskPage },
      { path: 'tasks-report', component: TasksReportPage },
      { path: 'pomodoro-technique', component: PomodoroTechniquePage }
    ]
  },
  {
    path: 'header-options',
    loadChildren: () => import('./header-options/header-options.module').then( m => m.HeaderOptionsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListPageRoutingModule {}
