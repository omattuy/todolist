import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundPage } from './page-not-found/page-not-found.page';
import { TodoListPage } from './todo-list/todo-list.page';
import { LoginLogoutPage } from './login-logout/login-logout.page';

const routes: Routes = [
  //{ path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  { path: '', component: LoginLogoutPage },
  { path: 'todo-list', component: TodoListPage },
  { path: '**', component: PageNotFoundPage }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
