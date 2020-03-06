import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Task } from '../models/task';
import { DataTransferService } from '../services/DataTransferService';
import { HeaderOptionsPage } from './header-options/header-options.page';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  tasks: Task[] = [];
  listTasks_isActive: boolean;
  createTask_isActive: boolean;
  reportTasks_isActive: boolean;
  pomodoro_isActive: boolean;

  constructor(private ev: DataTransferService,
              public popoverController: PopoverController,
              private router: Router) {

    this.listTasks_isActive = true;
    this.createTask_isActive = false;
    this.reportTasks_isActive = false;
    this.pomodoro_isActive = false;

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.tasks = this.ev.getTasks();
        if (e.url == "/todo-list/create-task") {
          this.createTask_isActive = true;
          this.listTasks_isActive = false;
          this.reportTasks_isActive = false;
          this.pomodoro_isActive = false;
        } else if (e.url == "/todo-list") {
          this.listTasks_isActive = true;
          this.createTask_isActive = false;
          this.reportTasks_isActive = false;
          this.pomodoro_isActive = false;
        } else if (e.url == "/todo-list/tasks-report") {
          this.listTasks_isActive = false;
          this.createTask_isActive = false;
          this.reportTasks_isActive = true;
          this.pomodoro_isActive = false;
        } else if (e.url == "/todo-list/pomodoro-technique") {
          this.listTasks_isActive = false;
          this.createTask_isActive = false;
          this.reportTasks_isActive = false;
          this.pomodoro_isActive = true;
        }
      }
   })

  }

  ngOnInit() { }

  async showOptions(ev: any) {
    const popover = await this.popoverController.create({
      component: HeaderOptionsPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async dismissPopOver() {
    await this.popoverController.dismiss();
  }

}
