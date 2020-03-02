import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';
import { SingleTaskModalComponent } from './single-task-modal/single-task-modal.component';
import { StatusComponent } from './status/status.component';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.page.html',
  styleUrls: ['./list-tasks.page.scss'],
})

export class ListTasksPage implements OnInit {

  tasks: Task[] = [];
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;

  constructor(private ev: DataTransferService,
              private router: Router,
              private alertCtrl: AlertController,
              public modalController: ModalController,
              public popoverController: PopoverController) {
    this.loadTaskLists();
  }

  ngOnInit() {}

  loadTaskLists() {
    /* Comment / uncomment the code below for debugging purposes */
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.tasks = this.ev.getTasks();
      }
    })
    /* Comment / uncomment the code below for debugging purposes */
    
    /* this.tasks = [
      {
        id: "task-0",
        priority: "Low",
        title: "primeira descrição",
        description: "primeiro comentário",
        completed: false,
        status: 'Done'
      },
      {
        id: "task-1",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-2",
        priority: "High",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-3",
        priority: "High",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-4",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-5",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-6",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-7",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: false,
        status: 'Done'
      },
      {
        id: "task-8",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: false,
        status: 'Done'
      },
      {
        id: "task-9",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: true,
        status: 'Done'
      },
      {
        id: "task-10",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: false,
        status: 'Done'
      }
    ] */
   
  }

  doReorder(ev: any) { /* Allows the list of tasks to be reordered */
    ev.detail.complete();
  }

  /* changeTaskStatus(id) {
    this.ev.changeTaskStatus(id);
  } */

  /* async openTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.priority = this.tasks[i].priority;
        this.description = this.tasks[i].description;
        this.completed = this.tasks[i].completed;
      }
    }
    const modal = await this.modalController.create({
      component: SingleTaskModalComponent,
      componentProps: {
        title: this.title,
        priority: this.priority,
        description: this.description,
        completed: this.completed,
        status: 'Done'
      },
      cssClass: 'task_modal'
    });
    return await modal.present();
  } */

  /* deleteTask(id) {
    this.ev.deleteTask(id);
  } */

  /* async deleteTaskAlert(id) {
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
  } */

  async showOptions(ev: any, id) {
    const popover = await this.popoverController.create({
      component: StatusComponent,
      event: ev,
      translucent: true,
      componentProps: {
        id: id
      },
      cssClass: 'pop-over-style'
    });
    return await popover.present();
  }

  closePopOver() {
    let open_icon = document.getElementById("open_icon").addEventListener("click");
    let edit_icon = document.getElementById("edit_icon").addEventListener("click");
    let delete_icon = document.getElementById("delete_icon").addEventListener("click");
  }

}
