import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/AuthenticationService';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  task = new Task();
  userId: string;

  constructor(public authService: AuthenticationService, private ev: DataTransferService, public toastController: ToastController) {
    this.getter();  
  }

  getter() {
    this.authService.isLoggedIn().subscribe(user => {
        this.userId = user.uid;
    })
  }

  ngOnInit() {}

  createTask(): void {
    //console.log('Create1: ', this.userId);
    this.task.userId = this.userId;
    //console.log("Create2: ", this.task.userId);
    this.ev.addTask(this.task);
    this.task = new Task();
  }

  async createNewTask() {
    if (this.task.title != undefined && this.task.notes != undefined) {
      this.createTask();
      const toast = await this.toastController.create({
        message: 'The task has been created!',
        duration: 1000,
        position: 'middle'
      });
      toast.present();
    }
  }

}
