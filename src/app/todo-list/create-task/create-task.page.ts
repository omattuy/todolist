import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  task = new Task();
  //priority = ['High', 'Medium', 'Low'];

  constructor(private ev: DataTransferService, public toastController: ToastController) { }

  ngOnInit() {}

  /* onChange(priority) {
    this.task.priority = priority.detail.value;
  } */

  createTask(): void {
      this.task.id = 'task-' + this.ev.getTasks().length.toString();
      this.ev.addTask(this.task);
      this.task = new Task();
  }

  async createNewTask() {
    if (this.task.title != undefined && this.task.notes != undefined /* && this.task.priority != undefined */) {
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
