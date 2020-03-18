import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataTransferService } from '../../../services/DataTransferService';
import { Task } from '../../../models/task';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-show-options',
  templateUrl: './show-options.component.html',
  styleUrls: ['./show-options.component.scss'],
})
export class ShowOptionsComponent implements OnInit {

  tasks: Task[] = [];
  id: string;

  constructor(private crud: DataTransferService,
              private alertCtrl: AlertController,
              public modalController: ModalController,
              public popoverController: PopoverController) { }

  ngOnInit() {}

  ngDoCheck() {
    this.tasks = this.crud.getTasks();
  }

  async dismissPopOver() {
    await this.popoverController.dismiss();
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
    this.crud.deleteTask(id);
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
