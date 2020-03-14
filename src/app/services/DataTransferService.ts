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

  public addTask(task: Task):void {
    //this.tasks.push(task); // FIXME : Voltar aqui para verificar a necessidade de usar essa linha para mostrar a task no front
    this.db.collection('tasks').add({
      title: task.title,
      notes: task.notes,
      completed: task.completed
    })
  }

  async getTasksFromDB() {
    await this.db.collection('tasks').get().then((snapshot) =>{
        snapshot.docs.forEach(doc => {
          this.task = new Task();
          this.task.id = doc.id;
          this.task.title = doc.data().title;
          this.task.notes = doc.data().notes;
          this.task.completed = doc.data().completed;
          this.tasks.push(this.task);
        })
    });
  }

  public getTasks() {
    return this.tasks;
  }

  // FIXME: Voltar aqui para que o método esteja conectado com a DB
  public editTask(id, title?: string, notes?: string, completed?: boolean): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        if (title != undefined) {
          this.tasks[i].title = title;
        }
        if (notes != undefined) {
          this.tasks[i].notes = notes;
        }
        if (completed != undefined) {
          this.tasks[i].completed = completed;
        }
      }
    }
  }

  public deleteTask(id: string): void {
    this.db.collection('tasks').doc(id).delete();
    /* for (let i = 0; i < this.tasks.length; i++) { // FIXME: Voltar aqui para verificar a necessidade de manter o código abaixo para deletar a tarefa do front
      if (id == this.tasks[i].id) {
        this.tasks.splice(i, 1);
      }
    } */
  }

}