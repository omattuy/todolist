import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DataTransferService } from '../../../services/DataTransferService';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {

  tasks: Task[] = [];
  id: string;
  title: string;
  notes?: string;

  constructor(private ev: DataTransferService,
              public toastController: ToastController,
              public modalController: ModalController) {

    this.loadTask();
  }

  loadTask() {
    this.tasks = this.ev.getTasks();
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.notes = this.tasks[i].notes;
      }
    }
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async alertMessage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }

  editTask () {
    this.alertMessage('Task successfully edited!');
    this.ev.editTask(this.id, this.title, this.notes, undefined);
    this.closeModal();
  }

}
