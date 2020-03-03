import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
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

  constructor(private ev: DataTransferService,
              private alertCtrl: AlertController,
              public modalController: ModalController,
              public popoverController: PopoverController) { }

  ngOnInit() {}

  ngDoCheck() {
    this.tasks = this.ev.getTasks();
  }

  async dismissPopOver() {
    await this.popoverController.dismiss();
  }

  openTask(id) {
    let task_id = id;
    this.openModal(task_id);
    this.dismissPopOver();
  }

  async openModal(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.priority = this.tasks[i].priority;
        this.description = this.tasks[i].description;
        this.status = this.tasks[i].status;
      }
    }
    const modal = await this.modalController.create({
      component: OpenTaskComponent,
      componentProps: {
        title: this.title,
        priority: this.priority,
        description: this.description,
        status: this.status
      },
      cssClass: 'task_modal'
    });
    return await modal.present();
  }


  editTask(id) {
    let task_id = id;
    this.editModal(task_id);
    this.dismissPopOver();
  }

  async editModal(id) {
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
    this.dismissPopOver();
  }

}
