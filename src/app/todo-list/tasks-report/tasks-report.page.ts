import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks-report',
  templateUrl: './tasks-report.page.html',
  styleUrls: ['./tasks-report.page.scss'],
})
export class TasksReportPage implements OnInit {

  tasks: Task[] = [];
  number_finished_tasks: number;
  number_unfinished_tasks: number;

  constructor(private ev: DataTransferService, private router: Router) {
    this.number_finished_tasks = 0;
    this.number_unfinished_tasks = 0;
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.loadTaskLists();
        this.getFinishedTasks();
        this.getUnfinishedTasks();
      }
    })
  }

  ngOnInit() {
  }

  loadTaskLists() {
    this.tasks = this.ev.getTasks();
  }

  getFinishedTasks() {
    this.number_finished_tasks = 0;
    for (let i =0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed == true) {
        this.number_finished_tasks += 1;
      }
    }
    return this.number_finished_tasks;
  }

  getUnfinishedTasks() {
    this.number_unfinished_tasks = 0;
    for (let i =0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed == false) {
        this.number_unfinished_tasks += 1;
      }
    }
    return this.number_unfinished_tasks;
  }

}
