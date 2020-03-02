import {Injectable} from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class DataTransferService {

  task: Task;
  tasks: Task[] = [];
  counter:number = 0;

  constructor() {}

  public addTask(task: Task):void {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public changeTaskStatus(id: string): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.tasks[i].completed = !this.tasks[i].completed;
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