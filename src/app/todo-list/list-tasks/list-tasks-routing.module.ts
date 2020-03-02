import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTasksPage } from './list-tasks.page';
import { SingleTaskComponent } from './single-task/single-task.component';

const routes: Routes = [
  {
    path: 'list-tasks',
    component: ListTasksPage,
    children: [
      { path: 'single-task', component: SingleTaskComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTasksPageRoutingModule {}
