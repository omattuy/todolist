import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';
import { ShowOptionsComponent } from './show-options/show-options.component';

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

  async showOptions(ev: any, id) {
    const popover = await this.popoverController.create({
      component: ShowOptionsComponent,
      event: ev,
      translucent: true,
      componentProps: {
        id: id
      },
      cssClass: 'pop-over-style'
    });
    return await popover.present();
  }

  closePopOver() { // FIXME: Not working yet
    let open_icon = document.getElementById("open_icon");
    let edit_icon = document.getElementById("edit_icon");
    let delete_icon = document.getElementById("delete_icon");
  }

}
