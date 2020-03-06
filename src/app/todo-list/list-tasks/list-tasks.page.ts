import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DataTransferService } from '../../services/DataTransferService';
import { Task } from '../../models/task';
import { ShowOptionsComponent } from './show-options/show-options.component';
import { OpenTaskComponent } from '../list-tasks/open-task/open-task.component';

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
  completed: boolean;
  
  task_idx:number;
  color_palette: Array<string> = [];

  constructor(private ev: DataTransferService,
              private router: Router,
              public modalController: ModalController,
              public popoverController: PopoverController) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url == "/todo-list") {
          this.loadTaskLists();
          this.setColorPalette();
        }
      }
    })
  }

  ngOnInit() { }

  loadTaskLists() {

    /* Comment / uncomment the code below for debugging purposes */
      this.tasks = this.ev.getTasks();
    
    /* Comment / uncomment the code below for debugging purposes */
    
    /* this.tasks = [
      {
        id: "task-0",
        priority: "Low",
        title: "primeira descrição",
        description: "primeiro comentário",
        completed: false
      },
      {
        id: "task-1",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        completed: false
      },
      {
        id: "task-4",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-5",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-6",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        completed: false
      }
    ] */

  }

  doReorder(ev: any) { /* Allows the list of tasks to be reordered */
    ev.detail.complete(this.tasks);
  }

  setColorPalette() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (i == 0) {
        this.color_palette[0] = "rgb(87, 198, 218)";
        //this.color_palette[0] = "rgb(87, 198, 218)";
      } else {
        this.color_palette[i] = "rgb(" +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf("(") + 1, this.color_palette[i-1].indexOf(","))) + 18).toString() +
                          "," +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf(",") + 1, this.color_palette[i-1].indexOf(",", this.color_palette[i-1].indexOf(",") + 1))) + 18).toString() +
                          "," +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf(",", this.color_palette[i-1].indexOf(",") + 1) + 1, this.color_palette[i-1].indexOf(")"))) + 18).toString() +
                          ")";
      }
    }
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

  openTask(id) {
    let task_id = id;
    this.openModal(task_id);
  }

  async openModal(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.description = this.tasks[i].description;
        this.completed = this.tasks[i].completed;
      }
    }
    const modal = await this.modalController.create({
      component: OpenTaskComponent,
      componentProps: {
        title: this.title,
        description: this.description,
        completed: this.completed
      },
      cssClass: 'task_modal'
    });
    return await modal.present();
  }

}
