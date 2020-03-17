import {Injectable} from '@angular/core';
import { Task } from '../models/task';
import { AuthenticationService } from './AuthenticationService';
import 'firebase/firestore';
import * as firebase from "firebase/app";

@Injectable()
export class DataTransferService {

  task: Task;
  tasks: Task[] = [];
  db: any;
  userId: string;

  constructor(public authService: AuthenticationService) {
    this.setUpUserData();
    this.db = firebase.firestore();
    this.authService.isLoggedIn().subscribe(user => {
      if (user) {
      } else {
        this.tasks = [];
      }
    })
  }

  setUpUserData() {
    this.authService.isLoggedIn().subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.realTimeCUD();
      }
    })
  }

  public addTask(task: Task):void {
    this.db.collection('tasks').add({
      userId: task.userId,
      title: task.title,
      notes: task.notes,
      completed: task.completed
    })
  }

  public getTasks() {
    return this.tasks;
  }

  public deleteTask(id: string): void {
    this.db.collection('tasks').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

  public editTask(id, title?: string, notes?: string, completed?: boolean): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        if (title != undefined) {
          this.db.collection('tasks').doc(id).update({
            title: title
          })
        }
        if (notes != undefined) {
          this.db.collection('tasks').doc(id).update({
            notes: notes
          })
        }
        if (completed != undefined) {
          this.db.collection('tasks').doc(id).update({
            completed: completed
          })
        }
      }
    }
  }

  // Real-time synchronization of the front-end and the database (CUD: Create, Update and Delete)
  async realTimeCUD() {
    console.log('listener(user.id): ', this.userId);
    this.db.collection('tasks').where('userId', '==', this.userId).onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type == "added") {
          this.task = new Task();
          this.task.id = change.doc.id;
          this.task.userId =  change.doc.data().userId;
          this.task.title = change.doc.data().title;
          this.task.notes = change.doc.data().notes;
          this.task.completed = change.doc.data().completed;
          this.tasks.push(this.task);
        } else if (change.type == "removed") {
          for (let i = 0; i < this.tasks.length; i++) {
            if (change.doc.id == this.tasks[i].id) {
              this.tasks.splice(i, 1);
            }
          }
        } else if (change.type == "modified") {
          for (let i = 0; i < this.tasks.length; i++) {
            if (change.doc.id == this.tasks[i].id) {
              this.tasks[i].title = change.doc.data().title;
              this.tasks[i].notes = change.doc.data().notes;
              this.tasks[i].completed = change.doc.data().completed;
            }
          }
        }
      })
    })
  }

}