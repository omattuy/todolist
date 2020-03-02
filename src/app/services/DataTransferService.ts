import {Injectable} from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class DataTransferService {

  task: Task;
  tasks: Task[] = [];

  constructor() {}

  public addTask(task: Task):void {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public editTask(id, title, description, priority, status): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.tasks[i].title = title;
        this.tasks[i].description = description;
        this.tasks[i].priority = priority;
        this.tasks[i].status = status;
      }
    }
  }

  public deleteTask(id: string): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.tasks.splice(i, 1);
      }
    }
  }

}