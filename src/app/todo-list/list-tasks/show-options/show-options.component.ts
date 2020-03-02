import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataTransferService } from '../../../services/DataTransferService';
import { Task } from '../../../models/task';
import { OpenTaskComponent } from '../open-task/open-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-show-options',
  templateUrl: './show-options.component.html',
  styleUrls: ['./show-options.component.scss'],
})
export class ShowOptionsComponent implements OnInit {

  tasks: Task[] = [];
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  completed: boolean;

  constructor(private ev: DataTransferService,
              private alertCtrl: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {}

  ngDoCheck() {
    this.tasks = this.ev.getTasks();
  }

  async openTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.priority = this.tasks[i].priority;
        this.description = this.tasks[i].description;
        this.status = this.tasks[i].status;
        this.completed = this.tasks[i].completed;
      }
    }
    const modal = await this.modalController.create({
      component: OpenTaskComponent,
      componentProps: {
        title: this.title,
        priority: this.priority,
        description: this.description,
        status: this.status,
        completed: this.completed
      },
      cssClass: 'task_modal'
    });
    return await modal.present();
  }

  async editTask(id) {
    const modal = await this.modalController.create({
      component: EditTaskComponent,
      componentProps: {
        id: id
      },
      cssClass: 'task_modal'
    });
    return await modal.present();
  }

  deleteTask(id) {
    this.ev.deleteTask(id);
  }

  async deleteTaskAlert(id) {
    const alert = await this.alertCtrl.create({
      header: 'Delete task',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          text: 'No',
          role: 'no',
          cssClass: 'secondary'
        }, {
          text: 'Yes',
          handler: () => {
            this.deleteTask(id);
          }
        }
      ]
    });
    await alert.present();
  }

}