import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../../../services/DataTransferService';
import { Task } from '../../../models/task';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent implements OnInit {

  tasks: Task[];
  id: string;
  title: string;
  new_title: string;
  description: string;
  new_description: string;
  priority: string;
  new_priority: string;
  priority_types = ['High', 'Medium', 'Low'];
  completed: boolean;

  constructor(private ev: DataTransferService, private activated_route:ActivatedRoute, public toastController: ToastController) { }

  ngOnInit() {
    this.activated_route.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });
  }

  ngDoCheck() {
    this.tasks = this.ev.getTasks();
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.id == this.tasks[i].id) {
        this.title = this.tasks[i].title;
        this.priority = this.tasks[i].priority;
        this.description = this.tasks[i].description;
        this.completed = this.tasks[i].completed;
      }
    }
  }
  
}
