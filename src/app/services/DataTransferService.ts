import {Injectable} from '@angular/core';
import { Task } from '../models/task';
import 'firebase/firestore';
import * as firebase from "firebase/app";

@Injectable()
export class DataTransferService {

  task: Task;
  tasks: Task[] = [];
  db: any;

  constructor() {
    this.db = firebase.firestore();
    this.getTasksFromDB();
  }

  async getTasksFromDB() {
    await this.db.collection('tasks').get().then((snapshot) =>{
        snapshot.docs.forEach(doc => {
            this.tasks.push(doc.data());
        })
    });
  }

  public addTask(task: Task):void {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public editTask(id, title, notes): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        if (title != undefined) {
          this.tasks[i].title = title;
        }
        if (notes != undefined) {
          this.tasks[i].notes = notes;
        }
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