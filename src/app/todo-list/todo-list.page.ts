import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Task } from '../models/task';
import { DataTransferService } from '../services/DataTransferService';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  tasks: Task[] = [];

  constructor(private ev: DataTransferService, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.tasks = this.ev.getTasks();
      }
   });
  }

  ngOnInit() {}

}
