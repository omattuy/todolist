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
import { PageNotFoundPage } from './page-not-found/page-not-found.page';
import { OpenTaskComponent } from './todo-list/list-tasks/open-task/open-task.component';
import { ShowOptionsComponent } from './todo-list/list-tasks/show-options/show-options.component';
import { EditTaskComponent } from './todo-list/list-tasks/edit-task/edit-task.component';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@NgModule ({
  declarations: [AppComponent, TodoListPage, PageNotFoundPage, OpenTaskComponent, ShowOptionsComponent, EditTaskComponent],
  entryComponents: [OpenTaskComponent, ShowOptionsComponent, EditTaskComponent],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, TodoListPageModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataTransferService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
