import { Component, OnInit } from '@angular/core';
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
  description: string;
  priorities = ['High', 'Medium', 'Low'];
  priority:string;
  types_status = ['Not working', 'Being executed', 'Done'];
  status:string;
  completed: boolean;

  constructor(private ev: DataTransferService) { }

  ngOnInit() {}

  ngDoCheck() {
    this.tasks = this.ev.getTasks();
  }

  editTask () {
    this.ev.editTask(this.id, this.title, this.description, this.status, this.priority);
  }

}
