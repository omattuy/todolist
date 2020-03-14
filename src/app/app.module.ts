import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoListPage } from './todo-list/todo-list.page';
import { TodoListPageModule } from './todo-list/todo-list.module';
import { DataTransferService } from './services/DataTransferService';
import { AuthenticationService } from './services/AuthenticationService';
import { AuthGuard } from './services/AuthGuard';
import { CrudService } from './services/CrudService';
import { PageNotFoundPage } from './page-not-found/page-not-found.page';
import { ShowOptionsComponent } from './todo-list/list-tasks/show-options/show-options.component';
import { OpenTaskComponent } from './todo-list/list-tasks/open-task/open-task.component';
import { EditTaskComponent } from './todo-list/list-tasks/edit-task/edit-task.component';
import { HeaderOptionsPage } from './todo-list/header-options/header-options.page';
import { TasksReportPage } from './todo-list/tasks-report/tasks-report.page';
import { PomodoroTechniquePage } from './todo-list/pomodoro-technique/pomodoro-technique.page';
import { LoginLogoutPage } from './login-logout/login-logout.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule ({
  declarations: [AppComponent, TodoListPage, PageNotFoundPage, ShowOptionsComponent, OpenTaskComponent, EditTaskComponent, HeaderOptionsPage, TasksReportPage, PomodoroTechniquePage, LoginLogoutPage],
  entryComponents: [ShowOptionsComponent, OpenTaskComponent, EditTaskComponent, HeaderOptionsPage, TasksReportPage, PomodoroTechniquePage, LoginLogoutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    TodoListPageModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#512b58",
      innerStrokeColor: "#9fe6ec",
      animationDuration: 300
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataTransferService,
    AuthenticationService,
    AuthGuard,
    CrudService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
