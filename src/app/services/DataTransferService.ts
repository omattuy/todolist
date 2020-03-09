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

  public editTask(id, title, notes/* priority, */ /* status */): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        if (title != undefined) {
          this.tasks[i].title = title;
        }
        if (notes != undefined) {
          this.tasks[i].notes = notes;
        }
        /* if (priority != undefined) {
          this.tasks[i].priority = priority;
        } */
       /*  if (status != undefined) {
          this.tasks[i].status = status;
        } */
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