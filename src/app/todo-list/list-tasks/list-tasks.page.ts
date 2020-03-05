import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
        status: 'Done',
        color: 'blue',
        color_idx: 2
      },
      {
        id: "task-1",
        priority: "Medium",
        title: "segunda descrição",
        description: "segundo comentário",
        status: 'Done',
        color: 'blue',
        color_idx: 2
      },
      {
        id: "task-4",
        priority: "Low",
        title: "terceira descrição",
        description: "terceiro comentário",
        status: 'Done',
        color: 'blue',
        color_idx: 2
      },
      {
        id: "task-5",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        status: 'Done',
        color: 'blue',
        color_idx: 2
      },
      {
        id: "task-6",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        status: 'Done',
        color: 'blue',
        color_idx: 2
      },
      {
        id: "task-7",
        priority: "Low",
        title: "quarta descrição",
        description: "terceiro comentário",
        status: 'Done',
        color: 'blue',
        color_idx: 2
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
      } else {
        this.color_palette[i] = "rgb(" +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf("(") + 1, this.color_palette[i-1].indexOf(","))) + 30).toString() +
                          "," +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf(",") + 1, this.color_palette[i-1].indexOf(",", this.color_palette[i-1].indexOf(",") + 1))) + 10).toString() +
                          "," +
                          (Number(this.color_palette[i-1].slice(this.color_palette[i-1].indexOf(",", this.color_palette[i-1].indexOf(",") + 1) + 1, this.color_palette[i-1].indexOf(")"))) + 10).toString() +
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

}
