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
  /* priorities = ['High', 'Medium', 'Low'];
  priority?: string; */
  //types_status = ['Not started', 'In progress', 'Completed'];
  //status?: string;

  //edited_title: boolean;
  //edited_notes: boolean;
  //edited_priority: boolean;
  //edited_status: boolean;

  constructor(private ev: DataTransferService,
              public toastController: ToastController,
              public modalController: ModalController) {
    //this.edited_title = false;
    //this.edited_notes = false;
    //this.edited_priority = false;
    //this.edited_status = false;
 }

  ngOnInit() {}

  /* editTitle() {
    this.edited_title = !this.edited_title;
  }

  editNotes() {
    this.edited_notes = !this.edited_notes;
  } */

  /* editPriority() {
    this.edited_priority = !this.edited_priority;
  } */

  /* editStatus() {
    this.edited_status = !this.edited_status;
  } */

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
    this.alertMessage('The task has been edited!');
    this.ev.editTask(this.id, this.title, this.notes /* this.priority, */ /* this.status */);
    this.closeModal();
  }

}
