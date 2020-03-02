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
  priority: string;
  types_status = ['Not started', 'In progress', 'Completed'];
  status: string;

  edit_title: boolean;
  edit_description: boolean;
  edit_priority: boolean;
  edit_status: boolean;

  constructor(private ev: DataTransferService) {
    this.edit_title = false;
    this.edit_description = false;
    this.edit_priority = false;
    this.edit_status = false;
  }

  ngOnInit() {}

  editTitle() {
    this.edit_title = !this.edit_title;
  }

  editDescription() {
    this.edit_description = !this.edit_description;
  }

  editPriority() {
    this.edit_priority = !this.edit_priority;
  }

  editStatus() {
    this.edit_status = !this.edit_status;
  }

  editTask () {
    this.ev.editTask(this.id, this.title, this.description, this.priority, this.status);
  }

}
